import { Box, Grid, Typography } from "@mui/material";
import StatCard from "../../components/common/StatCard";
import RecentActivity from "../../components/common/RecentActivity";

const Dashboard = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard title="Projects" value={12} />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard title="Test Cases" value={548} />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard title="Open Defects" value={24} />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard title="Executions" value={102} />
        </Grid>
      </Grid>
      <RecentActivity />
    </Box>
  );
};

export default Dashboard;