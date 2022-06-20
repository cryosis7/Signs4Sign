// import wordList from "../../dictionary/wordlist.json";
import signDictionary from "../../dictionary/nzsl.json";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

interface Sign {
  english: string;
  maori: string;
  secondary: string;
  picture: string;
  video: string;
  handShape: string;
  location: string;
}

interface Props {
  searchTerm: string;
  checkedList: Sign[];
  toggleChecked: (arg0: Sign) => void;
}

export const SearchResults = ({
  searchTerm,
  checkedList,
  toggleChecked,
}: Props) => {
  if (searchTerm.trim() === "") {
    return <></>;
  }

  const cleanedSearchTerm = searchTerm.toLowerCase().trim();
  const matchingWords =
    searchTerm.length <= 3
      ? signDictionary.filter((entry) =>
          entry.english.toLowerCase().startsWith(cleanedSearchTerm)
        )
      : signDictionary.filter((entry) =>
          entry.english.toLowerCase().includes(cleanedSearchTerm)
        );

  return (
    <Grid container spacing={1}>
      {matchingWords.map((signEntry, index) => (
        <Grid item key={index}>
          <Card raised={checkedList.includes(signEntry)}>
            <CardHeader title={signEntry.english} subheader={signEntry.maori} />
            {signEntry.secondary && (
              <CardContent>
                {signEntry.secondary && (
                  <Typography>{signEntry.secondary}</Typography>
                )}
              </CardContent>
            )}
            <CardActions>
              <FormControlLabel
                label="Add To Vocabulary"
                control={
                  <Checkbox
                    checked={checkedList.includes(signEntry)}
                    onChange={() => toggleChecked(signEntry)}
                  />
                }
              />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
