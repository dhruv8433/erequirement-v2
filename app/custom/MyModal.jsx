import { Modal } from "@mui/material";
import React from "react";

const MyModal = ({ open, setOpen, className, children }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      className={`${className} flex justify-center items-center`}
    >
      {children}
    </Modal>
  );
};

export default MyModal;
