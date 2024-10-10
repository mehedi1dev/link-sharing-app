import React from "react";
import ProfileViewShare from "../Components/ProfileViewShare";

const PreviewPage: React.FC = () => {
  return (
    <div>
      <div className="fixed top-0 right-0 left-0 h-80 w-screen bg-indigo-600 rounded-b-3xl md:rounded-b-[35px]"></div>

      <div className="">
        <ProfileViewShare />
      </div>
    </div>
  );
};

export default PreviewPage;
