import { Box, colors, CssBaseline, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
          bgcolor: "black",
          padding:"22% 0"
        }}
      >
        <Typography variant="h5" sx={{
          fontSize:"2rem"
        }}>Something went wrong ! </Typography>
        <Link to="/">Go Home ...</Link>
      </Box>
      <CssBaseline />
    </>
  );
}
