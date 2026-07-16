import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";

import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../pages/Dashboard/DashboardPage";
import OrganizationPage from "../pages/Organization/OrganizationPage";
import ProjectPage from "../pages/Projects/ProjectPage";
import RequirementPage from "../pages/Requirements/RequirementPage";
import TestCasePage from "../pages/TestCases/TestCasePage";
import TestExecutionPage from "../pages/TestExecution/TestExecutionPage";
import DefectPage from "../pages/Defects/DefectPage";

import ProtectedRoute from "../components/auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/organizations" element={<OrganizationPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/requirements" element={<RequirementPage />} />
          <Route path="/testcases" element={<TestCasePage />} />
          <Route path="/executions" element={<TestExecutionPage />} />
          <Route path="/defects" element={<DefectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;