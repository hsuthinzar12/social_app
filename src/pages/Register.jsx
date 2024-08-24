import { Box, Typography, OutlinedInput, Button, Alert } from "@mui/material";
export default function Register() {
  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: "center", mb: 4 }}>
        Register
      </Typography>
      <Alert sx={{ mb: 4 }} severity="warning">
        Please fill in all fields !{" "}
      </Alert>
      <OutlinedInput fullWidth sx={{ mb: 2 }} placeholder="Name : " />
      <OutlinedInput fullWidth sx={{ mb: 2 }} placeholder="UserName : " />
      <OutlinedInput
        fullWidth
        sx={{ mb: 2, height: 80}}
        placeholder="Profile : "
        multiline
      />
      <OutlinedInput fullWidth sx={{ mb: 2 }} placeholder="Password : " />
      <Button sx={{p:2}} fullWidth variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
}
