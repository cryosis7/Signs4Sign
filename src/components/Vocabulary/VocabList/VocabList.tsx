import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import React from "react";
import { Drawer, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  vocabList: string[];
  usingSmallScreen: boolean;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (arg0: boolean) => void;
}

export const VocabList = ({
  vocabList,
  usingSmallScreen,
  isDrawerOpen,
  setIsDrawerOpen,
}: Props) => {
  const vocabListElement = (
    <nav aria-label="Vocabulary list contents" style={{ minWidth: "15%" }}>
      <List disablePadding>
        <ListSubheader>
          <Typography variant="subtitle1">Vocabulary</Typography>
        </ListSubheader>
        {vocabList.map((word, i) => (
          <ListItem key={i}>
            <Link to={`/sign/${encodeURI(word)}`}>
              <ListItemText primary={word} />
            </Link>
          </ListItem>
        ))}
      </List>
    </nav>
  );

  return usingSmallScreen ? (
    <div>
      <Drawer
        anchor="left"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        PaperProps={{
          sx: { width: "60%" },
        }}
      >
        {vocabListElement}
      </Drawer>
    </div>
  ) : (
    vocabListElement
  );
};
