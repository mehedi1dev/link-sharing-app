import React from "react";
import ProfileView from "../Components/ProfileView";
import LinkAdd from "../Components/LinkAdd";

const LinkPage: React.FC = () => {
  return (
    <div className="md:flex gap-4">
      <div className="hidden md:block md:w-[500px] rounded-md bg-white">
        <ProfileView />
      </div>
      <div className="rounded-md bg-white grow ">
        <LinkAdd />
      </div>
    </div>
  );
};

export default LinkPage;
