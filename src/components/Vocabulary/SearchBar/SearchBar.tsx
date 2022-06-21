import { Button, Grid, TextField } from "@mui/material";
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
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={1}
        wrap={"nowrap"}
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item className="flex" sx={{ padding: "8px" }}>
          <TextField
            autoFocus
            label="Search For Sign"
            onChange={(event) => setValue(event.target.value)}
            value={value}
            fullWidth
          />
        </Grid>
        <Grid item className="flex flex-align-stretch" sx={{ padding: "8px" }}>
          <Button variant="contained" type="submit">
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
