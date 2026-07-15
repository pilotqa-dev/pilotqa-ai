import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import AppHeader from "../components/layout/AppHeader";

const MainLayout = () => {
  return (
    <Box>
      <AppHeader />

      <Box
        component="main"
        sx={{
          mt: 16,
          px: 3,
          pb: 3,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;