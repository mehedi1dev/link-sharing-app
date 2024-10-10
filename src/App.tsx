import React, { useState } from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import LinkPage from "./pages/LinkPage";
import { LinkProvider } from "./Context/LinkContext";
import ProfilePage from "./pages/ProfilePage";
import { pageType } from "./Types/types";
import { ProfileProvider } from "./Context/ProfileProvider";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<pageType>("LinkPage");
  return (
    <LinkProvider>
      <ProfileProvider>
        <div>
          <Navigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />

          <div className="my-4 px-4">
            {currentPage === "LinkPage" ? <LinkPage /> : <ProfilePage />}
          </div>
        </div>
      </ProfileProvider>
    </LinkProvider>
  );
};

export default App;
