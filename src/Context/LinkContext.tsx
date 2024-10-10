import React, { createContext, useState, ReactNode } from "react";

// Define the structure of a Link
interface LinkType {
  platform: string;
  icon: JSX.Element;
  link: string;
  color: string;
}

// Define the context structure
interface LinkContextType {
  links: LinkType[];
  setLinks: React.Dispatch<React.SetStateAction<LinkType[]>>;
}

// Create the context
export const LinkContext = createContext<LinkContextType | undefined>(
  undefined
);

// Context provider component
export const LinkProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [links, setLinks] = useState<LinkType[]>([]);

  return (
    <LinkContext.Provider value={{ links, setLinks }}>
      {children}
    </LinkContext.Provider>
  );
};
