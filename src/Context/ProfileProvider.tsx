// ProfileProvider.tsx
import React, { createContext, useState, ReactNode } from "react";
import { ProfileType } from "../Types/types";

interface ProfileContextType {
  profileDetails: ProfileType;
  setProfileDetails: (details: ProfileType) => void;
}

// Create the context
export const ProfileContext = createContext<ProfileContextType | undefined>(
  undefined
);

// Create the provider component
export const ProfileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initialize state with default values or with previous saved data
  const defaultProfileData: ProfileType = {
    firstName: "",
    lastName: "",
    email: "",
    profilePicture: null,
    profilePicturePreview: "",
  };

  const [profileDetails, setProfileDetails] =
    useState<ProfileType>(defaultProfileData);

  return (
    <ProfileContext.Provider value={{ profileDetails, setProfileDetails }}>
      {children}
    </ProfileContext.Provider>
  );
};
