import { useEffect, useState } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

import {
  getDashboardStats,
  type DashboardStats,
} from "../../services/dashboardService";

const DashboardPage = () => {
  const [stats, setStats] = useState<DashboardStats>({
    projects: 0,
    requirements: 0,
    testCases: 0,
    executions: 0,
    passed: 0,
    failed: 0,
    openDefects: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    const data = await getDashboardStats();
    setStats(data);
  };

  const cards = [
    { title: "Projects", value: stats.projects },
    { title: "Requirements", value: stats.requirements },
    { title: "Test Cases", value: stats.testCases },
    { title: "Executions", value: stats.executions },
    { title: "Passed", value: stats.passed },
    { title: "Failed", value: stats.failed },
    { title: "Open Defects", value: stats.openDefects },
  ];

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid key={card.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {card.title}
                </Typography>

                <Typography variant="h3">
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DashboardPage;