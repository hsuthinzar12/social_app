import { Typography, Box, OutlinedInput, Button, Alert } from "@mui/material";

export default function Login() {
  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: "center", mb:4 }}>
        Login
      </Typography>
      <Alert severity="warning" sx={{mb:4}} >Username and Password required</Alert>
      <OutlinedInput fullWidth sx={{mb:2}} placeholder="UserName : " />
      <OutlinedInput fullWidth sx={{mb:2}} placeholder="Password : " type="password"/>
      <Button sx={{p:2}} fullWidth variant="contained" type="submit">Login</Button>
    </Box>
  );
}
