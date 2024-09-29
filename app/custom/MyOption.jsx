import React from "react";
import styled from "@emotion/styled";

const StyledOption = styled.option`
  background-color: ${({ theme }) =>
    theme.palette.background.card}; /* Theme-based background */
  color: ${({ theme }) =>
    theme.palette.text.primary}; /* Theme-based text color */
`;

const MyOption = ({ value, children, className }) => {
  return (
    <StyledOption value={value} className={className}>
      {children}
    </StyledOption>
  );
};

export default MyOption;
