import { Container } from "@mui/material";
import React from "react";

// every time call this component where we want to use conatiner #standaraApproaching
const MyContainer = ({ children, className }) => {
  return (
    <Container maxWidth="xl" className={className}>
      {children}
    </Container>
  );
};

export default MyContainer;
