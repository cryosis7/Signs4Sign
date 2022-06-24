import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Typography } from "@mui/material";

interface Props {
  usingSmallScreen: boolean;
  setIsVocabDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuBar = ({ usingSmallScreen, setIsVocabDrawerOpen }: Props) => {
  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: "auto" }}>
        <Toolbar>
          {usingSmallScreen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setIsVocabDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6">NZSL Flash Cards</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
