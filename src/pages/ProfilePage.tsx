import ProfileDetails from "../Components/ProfileDetails";
import ProfileView from "../Components/ProfileView";

const ProfilePage = () => {
  return (
    <div className="md:flex gap-4">
      <div className="hidden md:block md:w-[500px] rounded-md bg-white">
        <ProfileView />
      </div>
      <div className="rounded-md bg-white grow ">
        <ProfileDetails />
      </div>
    </div>
  );
};

export default ProfilePage;
