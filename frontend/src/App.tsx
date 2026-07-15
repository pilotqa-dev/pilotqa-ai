import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import OrganizationPage from "./pages/Organization/OrganizationPage";
import ProjectPage from "./pages/Projects/ProjectPage";
import RequirementPage from "./pages/Requirements/RequirementPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/organizations" replace />} />
        <Route path="/organizations" element={<OrganizationPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/requirements" element={<RequirementPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;