import React from "react";
import styled from "@emotion/styled";

// Styled h1 component
const StyledTitle = styled.h1`
  font-weight: 600; /* Equivalent to font-semibold */
  margin: 16px 0;   /* Equivalent to my-4 */
  font-size: 1.5rem; /* Equivalent to text-2xl */
  color: ${({ theme }) => theme.palette.text.primary}; /* Using theme color */
`;

const MyTitle = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default MyTitle;
