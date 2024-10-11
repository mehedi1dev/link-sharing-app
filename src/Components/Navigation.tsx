import React from "react";
import { HiOutlineLink } from "react-icons/hi";
import { LuUserCircle2 } from "react-icons/lu";
import { pageType } from "../Types/types";
import { IoEyeOutline, IoShareSocialSharp } from "react-icons/io5";
import { RiLinksFill } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "sonner";

type navigationTypes = {
  currentPage: pageType;
  setCurrentPage: React.Dispatch<React.SetStateAction<pageType>>;
};

const Navigation: React.FC<navigationTypes> = ({
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="md:p-4 md:pb-0 z-50 sticky -top-4">
      <div className="bg-white p-2 rounded-lg flex justify-between items-center">
        {currentPage !== "PreviewPage" ? (
          <>
            <div className="flex items-center gap-1">
              <p className="p-1 bg-indigo-600 text-white rounded-xl">
                <RiLinksFill size={20} />
              </p>
              <p className="text-2xl font-bold">devlinks</p>
            </div>
            <div className="flex gap-4">
              <div>
                <button
                  className={`px-4 py-2 flex items-center gap-2 font-bold hover:text-indigo-700 ${
                    currentPage === "LinkPage"
                      ? "bg-indigo-200 text-indigo-700 rounded-lg"
                      : "text-gray-500"
                  }`}
                  onClick={() => setCurrentPage("LinkPage")}
                >
                  <HiOutlineLink />{" "}
                  <span className="hidden md:block">Links</span>
                </button>
              </div>
              <div>
                <button
                  className={`px-4 py-2 flex items-center gap-2 font-bold hover:text-indigo-700 ${
                    currentPage === "ProfilePage"
                      ? "bg-indigo-200 text-indigo-700 rounded-lg"
                      : "text-gray-500"
                  }`}
                  onClick={() => setCurrentPage("ProfilePage")}
                >
                  <LuUserCircle2 />
                  <span className="hidden md:block">Profile Details</span>
                </button>
              </div>
            </div>
            <div>
              <button
                className="px-4 py-2 flex items-center gap-2 bg-white border border-indigo-700 text-indigo-700 font-bold rounded-lg hover:bg-indigo-200"
                onClick={() => setCurrentPage("PreviewPage")}
              >
                <span className=" md:hidden">
                  <IoEyeOutline />
                </span>
                <span className="hidden md:block">Preview</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
              <button
                className="px-4 py-2 flex items-center gap-2 bg-white border border-indigo-700 text-indigo-700 font-bold rounded-lg hover:bg-indigo-200"
                onClick={() => setCurrentPage("LinkPage")}
              >
                <span className=" md:hidden">
                  <IoMdArrowRoundBack />
                </span>
                <span className="hidden md:block">Back to Editor</span>
              </button>
            </div>
            <div>
              <button
                className="px-4 py-2 flex items-center gap-2 bg-indigo-700 border border-indigo-700 text-white font-bold rounded-lg hover:bg-indigo-900"
                onClick={() => {
                  toast.warning("Sorry! No backend integrated.", {
                    id: "id",
                  });
                }}
              >
                <span className=" md:hidden">
                  <IoShareSocialSharp />
                </span>
                <span className="hidden md:block">Share Link</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
