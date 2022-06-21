import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface Props {
  vocabList: string[];
  vocabListName: string;
}

export const VocabList = ({ vocabList, vocabListName }: Props) => {
  return (
    <nav aria-label="Vocabulary list contents">
      <List disablePadding>
        <ListSubheader>{vocabListName || "Vocabulary"}</ListSubheader>
        {vocabList.map((word) => (
          <ListItem>
            <ListItemText primary={word} />
          </ListItem>
        ))}
      </List>
    </nav>
  );
};
