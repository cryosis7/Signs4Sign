import { Box, styled, Typography, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import React from "react";

interface Props {
  pullerHeight: number;
  clickHandler: () => void;
}

export const DrawerPuller = ({ pullerHeight, clickHandler }: Props) => {
  const theme = useTheme();

  return (
    <Box
      className="flex flex-justify-center"
      onClick={clickHandler}
      sx={{
        position: "absolute",
        backgroundColor: theme.palette.mode === "light" ? grey[400] : grey[600],
        top: -pullerHeight,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        visibility: "visible",
        height: pullerHeight,
        right: 0,
        left: 0,
      }}
    >
      <Box sx={{ alignContent: "center" }}>
        <DragHandleIcon />
      </Box>
    </Box>
  );
};
