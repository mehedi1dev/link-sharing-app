export type LinkType = {
  platform: string;
  icon: JSX.Element; // This should be a string or identifier to avoid serialization issues
  link: string;
  color: string;
};

export type pageType = "LinkPage" | "ProfilePage" | "PreviewPage";

export type ProfileType = {
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: File | null;
  profilePicturePreview: string;
};
