import signDictionary from "../../../../dictionary/nzsl.json";
import { Grid } from "@mui/material";
import React from "react";
import { Sign } from "../../../../shared/types";
import { SignCard } from "./SignCard";

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
          <SignCard
            isSelected={checkedList.includes(signEntry)}
            sign={signEntry}
            toggleChecked={toggleChecked}
          />
        </Grid>
      ))}
    </Grid>
  );
};
