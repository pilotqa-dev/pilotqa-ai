import { Card, CardContent, Typography } from "@mui/material";

interface StatCardProps {
  title: string;
  value: number;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 3,
        minWidth: 220,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
          mt={1}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;