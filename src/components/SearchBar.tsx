import { Autocomplete, TextField } from "@mui/material";
import wordList from "../dictionary/wordlist.json";

export const SearchBar = () => {
  return (
    <>
      <Autocomplete
        renderInput={(params) => (
          <TextField {...params} label="Look up word..." />
        )}
        options={wordList}
      />
    </>
  );
};
