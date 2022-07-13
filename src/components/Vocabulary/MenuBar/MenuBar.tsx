import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { NZSL_FLASH_CARDS, STUDY } from "../../../shared/constants";
import { useNavigate } from "react-router-dom";

interface Props {
  usingSmallScreen: boolean;
  setIsVocabDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuBar = ({ usingSmallScreen, setIsVocabDrawerOpen }: Props) => {
  const navigate = useNavigate();
  return (
    <nav>
      <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: "auto" }}>
        <Container maxWidth="xl">
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
            <Button color="inherit" onClick={() => navigate("/")}>
              <Typography variant="h6">{NZSL_FLASH_CARDS}</Typography>
            </Button>
            <Button color="inherit" onClick={() => navigate("/study")}>
              {STUDY}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />{" "}
      {/*This is to actually offset the rest of the page. not sure why we need it*/}
    </nav>
  );
};
