import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const activities = [
  "BUG-101 created by Britto",
  "Regression execution completed",
  "TC-245 updated",
  "Project 'Banking App' created",
];

const RecentActivity = () => {
  return (
    <Card sx={{ mt: 4, borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Activity
        </Typography>

        <List>
          {activities.map((activity, index) => (
            <ListItem key={index}>{activity}</ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;