import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Link,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@pilotqa.ai");
  const [password, setPassword] = useState("Admin123");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost:5001/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      localStorage.setItem(
        "token",
        data.accessToken
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      navigate("/dashboard");
    } catch {
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
  gutterBottom
  sx={{
    fontWeight: "bold",
    textAlign: "center",
  }}
>
  🚀 PilotQA AI
</Typography>

          <Typography
  variant="subtitle1"
  color="text.secondary"
  sx={{
    textAlign: "center",
    mb: 4,
  }}
>
  AI Powered Quality Engineering Platform
</Typography>

          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: 2,
  }}
>
            <FormControlLabel
              control={<Checkbox />}
              label="Remember Me"
            />

            <Link href="#">
              Forgot Password?
            </Link>
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress
                size={24}
                color="inherit"
              />
            ) : (
              "Login"
            )}
          </Button>

          <Typography
  color="text.secondary"
  sx={{
    textAlign: "center",
    mt: 4,
  }}
>
  © 2026 PilotQA AI
</Typography>
        </Paper>
      </Box>

      <Snackbar
        open={!!error}
        autoHideDuration={3000}
        onClose={() => setError("")}
      >
        <Alert severity="error">
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoginPage;