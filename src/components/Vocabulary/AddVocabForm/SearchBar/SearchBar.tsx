import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`search/${value}`, { replace: true });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-justify-space-between flex-align-stretch flex-gap"
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
