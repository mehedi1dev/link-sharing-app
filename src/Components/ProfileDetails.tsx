import React, { useState, useContext, useEffect } from "react";
import { ProfileContext } from "../Context/ProfileProvider";
import { toast } from "sonner";

const ProfileDetails: React.FC = () => {
  const profileContext = useContext(ProfileContext);
  if (!profileContext) {
    throw new Error("LinkContext must be used within a LinkProvider");
  }
  const { profileDetails, setProfileDetails } = profileContext;
  const [firstName, setFirstName] = useState(profileDetails.firstName);
  const [lastName, setLastName] = useState(profileDetails.lastName);
  const [email, setEmail] = useState(profileDetails.email);
  const [profilePicture, setProfilePicture] = useState<File | null>(
    profileDetails.profilePicture
  );
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    // Update the state if the context changes
    setFirstName(profileDetails.firstName);
    setLastName(profileDetails.lastName);
    setEmail(profileDetails.email);
    setProfilePicture(profileDetails.profilePicture);

    // Set image preview if a previous profile picture exists
    if (profileDetails.profilePicture) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(profileDetails.profilePicture);
      fileReader.onload = () => setImagePreview(fileReader.result as string);
    }
  }, [profileDetails]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      // Validate file type
      const allowedTypes = ["image/png", "image/jpeg", "image/bmp"];
      if (!allowedTypes.includes(file.type)) {
        alert("Invalid file type. Please use PNG, JPG, or BMP.");
        return;
      }

      const image = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target?.result) {
          image.src = e.target.result as string;
          image.onload = () => {
            // Validate dimensions
            if (image.width > 1024 || image.height > 1024) {
              toast.warning("Image dimensions must be below 1024x1024px.", {
                id: "id",
              });
              return;
            }

            // If validations pass, set the image preview and profile picture
            setProfilePicture(file);
            setImagePreview(image.src);
          };
        }
      };

      reader.readAsDataURL(file);
    }
  };
  const handleSave = () => {
    // Validate required fields
    if (!firstName || !lastName) {
      toast.warning("Please fill out all required fields before saving.", {
        id: "id",
      });
      return;
    }

    // Prepare data to save
    const profileData = {
      firstName,
      lastName,
      email,
      profilePicture,
      profilePicturePreview: imagePreview || "",
    };

    // Save data to context
    setProfileDetails(profileData);
    toast.success("Successfully saved! 🎉", { id: "id" });
  };

  return (
    <div>
      <div className="p-4 md:p-8 relative">
        <h2 className="text-3xl font-bold mb-2">Profile Details</h2>
        <p className="text-gray-700 mb-2">
          Add your details to create a personal touch to your profile.
        </p>
      </div>

      <div className="px-8">
        <div className="bg-gray-100 p-4 rounded">
          <div className="mb-4 flex items-center justify-between flex-wrap">
            <p className="min-w-32 text-gray-500 mb-2">Profile Picture</p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative w-40 h-40 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer">
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      alt="Profile Preview"
                      className="object-cover w-full h-full"
                    />
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center h-full text-gray-500">
                      Click to Upload Image
                    </div>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleImageUpload}
                />
              </div>
              <p className="text-xs text-gray-400 w-52">
                Image must be below 1024x1024px. Use Png, JPG, or BMP format.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8">
        <div className="bg-gray-100 p-4 rounded">
          <div className="flex justify-between flex-wrap items-center mb-4">
            <p className="min-w-32 text-gray-500">First Name*</p>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Type Your First Name"
              className="p-2 rounded focus:outline-indigo-400 focus:shadow-lg focus:shadow-indigo-100 border border-gray-400 min-w-53 max-w-xl grow"
            />
          </div>
          <div className="flex justify-between flex-wrap items-center mb-4">
            <p className="min-w-32 text-gray-500">Last Name*</p>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Type Your Last Name"
              className="p-2 rounded focus:outline-indigo-400 focus:shadow-lg focus:shadow-indigo-100 border border-gray-400 min-w-53 max-w-xl grow"
            />
          </div>
          <div className="flex justify-between flex-wrap items-center mb-4">
            <p className="min-w-32 text-gray-500">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type Your Email"
              className="p-2 rounded focus:outline-indigo-400 focus:shadow-lg focus:shadow-indigo-100 border border-gray-400 min-w-53 max-w-xl grow"
            />
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white p-4 w-full flex justify-end border-t border-gray-200">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-500 font-bold"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
