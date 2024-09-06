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

// cards box
const MyCardBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.card,
}));

// Secondary Box For Navigation and Footer
const MyServiceCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.serviceCard,
}));

// hover card box
const MyHoverCardBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.card,
  "&:hover": {
    background: theme.palette.background.cardhover,
  },
}));

export { MyPrimaryBox, MySecondaryBox, MyCardBox, MyHoverCardBox, MyServiceCard };
