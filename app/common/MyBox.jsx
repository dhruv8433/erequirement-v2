import styled from "@emotion/styled";
import { Box } from "@mui/material";

// Primary Box with hover effect For Cards
const MyPrimaryBox = styled(Box)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.background.primary,
  },
}));

// Secondary Box For Navigation and Footer
const MySecondaryBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export { MyPrimaryBox, MySecondaryBox };
