import { Box, CssBaseline, Typography } from "@mui/material";
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
          height: 400,
        }}
      >
        <Typography variant="h5">Something went wrong ! </Typography>
        <Link to="/">Go Home ...</Link>
      </Box>
      <CssBaseline />
    </>
  );
}
