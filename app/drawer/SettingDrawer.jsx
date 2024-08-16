import React from "react";
import { setTheme } from "../reducer/ThemeReducer";
import { useDispatch, useSelector } from "react-redux";
import { Divider, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { MyHeading } from "../common/MyText";

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
      <MyHeading title={"Settings"} className={"text-2xl my-2 font-semibold"}/>
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
