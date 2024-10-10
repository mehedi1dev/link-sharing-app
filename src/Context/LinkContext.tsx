import React, { createContext, useState, ReactNode } from "react";
import { LinkType } from "../Types/types";

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
