import styled from "@emotion/styled";
import { Icon } from "@mui/material";

const MyIcon = styled(Icon)(({ theme }) => ({
  color: theme.palette.icon.default,
  display: "flex",
}));

const MyStyledIcon = ({ Icon, className }) => {
  return <MyIcon className={className}>{Icon}</MyIcon>;
};

export { MyStyledIcon };
