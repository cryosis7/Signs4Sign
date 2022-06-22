import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

interface Props {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({ setSearchTerm }: Props) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-justify-space-between flex-align-stretch"
      style={{ gap: "1em" }}
    >
      <TextField
        autoFocus
        label="Search For Sign"
        fullWidth
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <Button variant="contained" type="submit">
        Search
      </Button>
    </form>
  );
};
