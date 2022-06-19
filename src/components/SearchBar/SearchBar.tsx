import { TextField } from "@mui/material";
import { useState } from "react";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (newWord: string) => {
    setValue(newWord);
  };

  return (
    <>
      <TextField
        autoFocus
        onChange={(event) => handleChange(event.target.value)}
        value={value}
        fullWidth
      />
      <SearchResults searchTerm={value} />
    </>
  );
};
