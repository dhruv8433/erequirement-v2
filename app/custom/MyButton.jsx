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
      className={`${className}`}
      data-aos="fade-up"
    >
      {title}
    </PrimaryButtonStyle>
  );
};

const BorderdButtonStyle = styled.button`
  background-color: transparent;
  border: 1px ${({ dashed }) => (dashed ? "dashed" : "solid")}
    ${({ theme }) => theme.palette.button.default};
`;

const MyBorderdButton = ({
  title,
  icon,
  className,
  onClickFunction,
  dashed,
}) => {
  return (
    <BorderdButtonStyle
      onClick={onClickFunction ? onClickFunction : null}
      className={`${className} rounded-md flex items-center justify-center gap-2`}
      dashed={dashed}
      data-aos="fade-up"
    >
      {icon && <span>{icon}</span>}
      {title}
    </BorderdButtonStyle>
  );
};

const MyButton = ({ title, icon, className, onClickFunction, dashed }) => {
  return (
    <button
      onClick={onClickFunction ? onClickFunction : null}
      className={`${className} rounded-md flex items-center justify-center gap-2`}
      dashed={dashed}
      data-aos="fade-up"
    >
      {icon && <span>{icon}</span>}
      {title}
    </button>
  );
};

export { MyPrimaryButton, MyBorderdButton, MyButton };
