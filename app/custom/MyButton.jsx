import styled from "@emotion/styled";

/**
 * there are total 5 types of buttons
 * 1. Primary with bg orange
 * 2. Border button
 * 3. Link Button
 * 4. Icon button
 * 5. Hover Animated Button
 */

const PrimaryButtonStyle = styled.button`
  background-color: ${({ theme }) => theme.palette.button.default};
`;

const MyPrimaryButton = ({ title, className, onClickFunction }) => {
  return (
    <PrimaryButtonStyle
      onClick={onClickFunction ? onClickFunction : null}
      className={className}
    >
      {title}
    </PrimaryButtonStyle>
  );
};

export { MyPrimaryButton };
