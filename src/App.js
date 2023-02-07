import React from "react";
import Menu from "./components/Menu";
import RedPage from "./pages/Redpage";
import BluePage from "./pages/BluePage";
import { Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UserPage";

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
};

export default App;
