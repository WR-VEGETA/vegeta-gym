import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";
import { purple } from "@mui/material/colors";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "100px", height: "81px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "48px", xs: "40px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
      color="purple"
      fontWeight={700}
    >
      VEGETA ULTRA EGO ㊙️
    </Typography>
  </Box>
);

export default Footer;
