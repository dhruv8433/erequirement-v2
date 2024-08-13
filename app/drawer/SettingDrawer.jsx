import React from "react";
import MyTitle from "../common/MyTitle";
import { setTheme } from "../reducer/ThemeReducer";
import { useDispatch, useSelector } from "react-redux";
import { Divider, ToggleButton, ToggleButtonGroup } from "@mui/material";

const SettingDrawer = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  const handleChange = (event, newTheme) => {
    if (newTheme !== null) {
      dispatch(setTheme(newTheme));
    }
  };

  return (
    <div className="p-2">
      <MyTitle title={"Settings"} />
      <Divider />
      <div className="theme-buttons my-4">
        <ToggleButtonGroup
          color="primary"
          value={currentTheme}
          exclusive
          fullWidth
          onChange={handleChange}
        >
          <ToggleButton value="light">Light Theme</ToggleButton>
          <ToggleButton value="dark">Dark Theme</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default SettingDrawer;
