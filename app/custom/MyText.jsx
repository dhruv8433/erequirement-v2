'use client'

import styled from "@emotion/styled";

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.palette.primary.main};
  margin-block: "16px";
`;

// Orange Text
const MyHeading = ({ className, title }) => {
  return <StyledTitle className={className}>{title}</StyledTitle>;
};

const StyledPrimaryText = styled.h1`
  color: ${({ theme }) => theme.palette.text.primary};
`;

// My Primary Text
const MyPrimaryText = ({ title, className }) => {
  return <StyledPrimaryText className={className}>{title}</StyledPrimaryText>;
};

const StyledSecondaryText = styled.h1`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

// gray and light black text
const MySecondaryText = ({ title, className }) => {
  return (
    <StyledSecondaryText className={className}>{title}</StyledSecondaryText>
  );
};
export { MyHeading, MyPrimaryText, MySecondaryText };
