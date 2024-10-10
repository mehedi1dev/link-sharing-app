import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import LinkPage from "./pages/LinkPage";
import { LinkProvider } from "./Context/LinkContext";

const App: React.FC = () => {
  return (
    <LinkProvider>
      <div>
        <Navigation />

        <div className="my-4 px-4">
          <LinkPage />
        </div>
      </div>
    </LinkProvider>
  );
};

export default App;
