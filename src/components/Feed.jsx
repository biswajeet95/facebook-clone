import React from "react";
import { Box } from "@mui/material";

import Posts from "./Posts";

const Feed = () => {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <Posts />
      <Posts />
      <Posts />
    </Box>
  );
};

export default Feed;
