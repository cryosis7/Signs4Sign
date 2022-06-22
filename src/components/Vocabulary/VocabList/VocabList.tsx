import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

interface Props {
  vocabList: string[];
}

const DRAWER_MIN_WIDTH = "300px";

export const VocabList = ({ vocabList }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex">
      {isDrawerOpen && (
        <nav aria-label="Vocabulary list contents">
          <List disablePadding>
            <ListSubheader>Vocabulary</ListSubheader>
            {vocabList.map((word) => (
              <ListItem>
                <ListItemText primary={word} />
              </ListItem>
            ))}
          </List>
        </nav>
      )}
      <div className="debug" style={{ position: "fixed", height: "100%" }}>
        <IconButton
          onClick={toggleDrawer}
          aria-label={`${isDrawerOpen ? "close" : "open"} vocabulary list`}
        >
          {isDrawerOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </IconButton>
      </div>
    </div>
  );
};
