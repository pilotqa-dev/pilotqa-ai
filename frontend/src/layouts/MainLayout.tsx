import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* <Sidebar /> */}

      <Box sx={{ flexGrow: 1 }}>
        <Header />

        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;