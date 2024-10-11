import React, { useContext, useEffect, useState } from "react";
import { LinkContext } from "../Context/LinkContext";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { LinkType } from "../Types/types";
import { MdDragHandle } from "react-icons/md";
import CustomSelect from "./smallComponents/CustomSelect";
import { HiOutlineLink } from "react-icons/hi";
import { toast } from "sonner";

// Define the options for the select dropdown
const options = [
  {
    value: "Github",
    label: "Github",
    icon: <TbBrandGithubFilled />,
    color: "#181717",
  },
  {
    value: "Youtube",
    label: "Youtube",
    icon: <FaYoutube />,
    color: "#FF0000",
  },
  {
    value: "LinkedIn",
    label: "LinkedIn",
    icon: <FaLinkedin />,
    color: "#0077B5",
  },
  {
    value: "Facebook",
    label: "Facebook",
    icon: <FaFacebook />,
    color: "#4267B2",
  },
];

const LinkAdd = () => {
  const linkContext = useContext(LinkContext);
  if (!linkContext) {
    throw new Error("LinkContext must be used within a LinkProvider");
  }

  const { setLinks, links } = linkContext;
  const [linkCount, setLinkCount] = useState<LinkType[]>([]);

  // Set default links if available
  useEffect(() => {
    setLinkCount(links);
  }, [links]);

  const addNewLink = () => {
    setLinkCount((prev) => [
      ...prev,
      { platform: "", icon: <></>, link: "", color: "" },
    ]);
  };

  const handleLinkChange = (
    index: number,
    field: keyof LinkType,
    value: string | { label: string; icon: JSX.Element; color: string }
  ) => {
    setLinkCount((prev) =>
      prev.map((link, i) =>
        i === index
          ? {
              ...link,
              [field]: typeof value === "string" ? value : value.label,
              icon: typeof value === "string" ? link.icon : value.icon,
              color: typeof value === "string" ? link.color : value.color,
            }
          : link
      )
    );
  };

  const handleSave = () => {
    // Check if all fields are filled
    const allFieldsFilled = linkCount.every(
      (link) => link.platform && link.link
    );

    if (!allFieldsFilled) {
      toast.warning("Please fill out all fields before saving.", {
        id: "id",
      });
      return;
    }

    setLinks(linkCount);
    toast.success("Successfully saved! 🎉", { id: "id" });
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (draggedIndex !== index) {
      const updatedLinks = [...linkCount];
      const [draggedLink] = updatedLinks.splice(draggedIndex, 1);
      updatedLinks.splice(index, 0, draggedLink);
      setLinkCount(updatedLinks);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="p-4 md:p-8 relative">
        <h2 className="text-3xl font-bold mb-2">Customize your links</h2>
        <p className="text-gray-700 mb-8">
          Add/Edit/Remove links below and then share all your profiles with the
          world!
        </p>
        <button
          className="px-4 py-2 w-full flex items-center justify-center gap-2 bg-white border border-indigo-700 text-indigo-700 font-bold rounded-lg hover:bg-indigo-200"
          onClick={addNewLink}
        >
          + Add new link
        </button>

        <div className="mt-4">
          {linkCount.map((link, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              className="mt-4 rounded p-2 md:p-4 w-full bg-gray-50"
            >
              <div className="flex justify-between">
                <div className="flex items-center">
                  <MdDragHandle className="cursor-move" />
                  <p className="text-sm font-bold text-gray-500">
                    Link #{index + 1}
                  </p>
                </div>
                <button
                  className="text-sm text-gray-500"
                  onClick={() =>
                    setLinkCount((prev) => prev.filter((_, i) => i !== index))
                  }
                >
                  Remove
                </button>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-500">Platform</p>
                <CustomSelect
                  options={options}
                  selectedValue={link.platform}
                  onOptionClick={(option) =>
                    handleLinkChange(index, "platform", option)
                  }
                />
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-500">Link</p>
                <div className="flex bg-white rounded border border-gray-400 p-2 items-center gap-2 hover:border-indigo-500">
                  <HiOutlineLink className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Type Link"
                    className="outline-none w-full"
                    value={link.link}
                    onChange={(e) =>
                      handleLinkChange(index, "link", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="sticky bottom-0 bg-white p-4 w-full flex justify-end border-t border-gray-200">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-500 font-bold"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkAdd;
