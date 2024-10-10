import React from "react";
import { HiOutlineLink } from "react-icons/hi";
import { LuUserCircle2 } from "react-icons/lu";
import { pageType } from "../Types/types";

type navigationTypes = {
  currentPage: pageType;
  setCurrentPage: React.Dispatch<React.SetStateAction<pageType>>;
};

const Navigation: React.FC<navigationTypes> = ({
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="md:p-4">
      <div className="bg-white p-2 rounded-lg flex justify-between items-center">
        <div>Logo</div>
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
              <HiOutlineLink /> Links
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
              Profile Details
            </button>
          </div>
        </div>
        <div>
          <button className="px-4 py-2 flex items-center gap-2 bg-white border border-indigo-700 text-indigo-700 font-bold rounded-lg hover:bg-indigo-200">
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
