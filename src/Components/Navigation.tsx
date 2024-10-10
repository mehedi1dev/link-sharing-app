import React from "react";
import { HiOutlineLink } from "react-icons/hi";
import { LuUserCircle2 } from "react-icons/lu";

const Navigation: React.FC = () => {
  return (
    <div className="md:p-4">
      <div className="bg-white p-2 rounded-lg flex justify-between items-center">
        <div>Logo</div>
        <div className="flex gap-4">
          <div>
            <button className="px-4 py-2 flex items-center gap-2 font-bold hover:text-indigo-700 bg-indigo-200 text-indigo-700 rounded-lg">
              <HiOutlineLink /> Links
            </button>
          </div>
          <div>
            <button className="px-4 py-2 flex items-center gap-2 font-bold hover:text-indigo-700 text-gray-500">
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
