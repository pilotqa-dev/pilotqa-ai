import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F7FB",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: 420,
          padding: 5,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          🚀 PilotQA AI
        </Typography>

        <Typography
          variant="subtitle1"
          textAlign="center"
          color="text.secondary"
          mb={4}
        >
          AI Powered Quality Engineering Platform
        </Typography>

        <TextField
          fullWidth
          label="Email Address"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
        />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Remember Me"
          />

          <Link href="#" underline="hover">
            Forgot Password?
          </Link>
        </Box>

        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 3 }}
        >
          Login
        </Button>

        <Typography
          textAlign="center"
          mt={4}
          color="text.secondary"
        >
          © 2026 PilotQA AI
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;