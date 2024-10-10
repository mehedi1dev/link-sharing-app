export type LinkType = {
  platform: string;
  icon: JSX.Element; // This should be a string or identifier to avoid serialization issues
  link: string;
  color: string;
};
