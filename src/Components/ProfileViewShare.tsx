import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { LinkContext } from "../Context/LinkContext";
import { ProfileContext } from "../Context/ProfileProvider";

const formatLink = (value: string) => {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value; // Return as is if it starts with http or https
  }
  return `https://${value}`; // Prepend https://
};

const ProfileViewShare = () => {
  const linkContext = useContext(LinkContext);
  if (!linkContext) {
    throw new Error("LinkContext must be used within a LinkProvider");
  }
  const { links } = linkContext;

  const profileContext = useContext(ProfileContext);
  if (!profileContext) {
    throw new Error("LinkContext must be used within a LinkProvider");
  }
  const { profileDetails } = profileContext; // Ensure the context is defined
  return (
    <div className="flex min-h-fit items-center justify-center">
      <div className="relative w-[300px] min-h-[530px] bg-white rounded-[40px] shadow-xl border-gray-300 border-2">
        <div className="h-full w-full pt-12 px-6 overflow-y-auto">
          <div className="flex flex-col items-center space-y-4 mb-8">
            {profileDetails.profilePicture ? (
              <img
                src={profileDetails.profilePicturePreview}
                alt="Profile Preview"
                className="object-cover h-28 w-28 rounded-full border border-indigo-600"
              />
            ) : (
              <div className="h-28 w-28 rounded-full bg-gray-200" />
            )}
            {profileDetails.firstName ? (
              <p>
                {profileDetails.firstName} {profileDetails.lastName}
              </p>
            ) : (
              <div className="h-4 w-32 rounded bg-gray-200" />
            )}
            {profileDetails.email ? (
              <p>{profileDetails.email}</p>
            ) : (
              <div className="h-3 w-40 rounded bg-gray-200" />
            )}
          </div>
          <div className="space-y-4">
            {links.length > 0 ? (
              links.map((link) => {
                return (
                  <a
                    className={`w-full py-3 px-4 text-white rounded-lg flex items-center justify-between`}
                    style={{ backgroundColor: link.color }}
                    href={formatLink(link.link)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm flex items-center gap-2">
                      {link.icon} {link.platform}
                    </span>
                    <FaArrowRight size={14} />
                  </a>
                );
              })
            ) : (
              <div className="h-10 w-full m-auto rounded bg-gray-200" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewShare;
