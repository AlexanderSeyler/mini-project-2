import React, { useState } from "react";
import { Container, TextField, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginFunction = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (email === "example" && password === "example") {
      console.log("Login successful!");
      navigate("/");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Creating account with:", { email, password });
    navigate("/");
  };

  return (
    <Container maxWidth="xs">
      <div style={{ marginTop: "100px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          {isCreatingAccount ? "Create Account" : "Login"}
        </Typography>
        <form onSubmit={isCreatingAccount ? handleCreateAccount : handleLogin}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                {isCreatingAccount ? "Create Account" : "Login"}
              </Button>
            </Grid>
            {!isCreatingAccount && (
              <Grid item xs={12}>
                <Typography variant="body1" align="center">
                  Don't have an account?{" "}
                  <Button
                    color="primary"
                    onClick={() => setIsCreatingAccount(true)}
                  >
                    Create Account
                  </Button>
                </Typography>
              </Grid>
            )}
            {error && (
              <Grid item xs={12}>
                <Typography variant="body1" color="error" align="center">
                  {error}
                </Typography>
              </Grid>
            )}
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default LoginFunction;
