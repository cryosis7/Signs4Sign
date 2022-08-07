import signDictionary from "../../../../dictionary/nzsl.json";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { Sign } from "../../../../shared/types";
import { SignCard } from "./SignCard";
import { IndexedDbService } from "../../../../services/IndexedDbService";
import { Database } from "../../../../shared/constants";

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
  useEffect(() => {
    const runIndexedDb = async () => {
      const indexedDb = new IndexedDbService();
      await indexedDb.createObjectStore([Database.TableSignDictionary]);
      await indexedDb.searchDb(
        Database.TableSignDictionary,
        searchTerm.toLowerCase().trim()
      );
    };
    runIndexedDb();
  }, [searchTerm]);

  if (searchTerm.trim() === "") {
    return <></>;
  }

  const cleanedSearchTerm = searchTerm.toLowerCase().trim();
  const matchingWords = (
    searchTerm.length <= 3
      ? signDictionary.filter((entry) =>
          entry.english.toLowerCase().startsWith(cleanedSearchTerm)
        )
      : signDictionary.filter((entry) =>
          entry.english.toLowerCase().includes(cleanedSearchTerm)
        )
  ).slice(0, 30);

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
