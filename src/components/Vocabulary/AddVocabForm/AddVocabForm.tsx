import React, { useState } from "react";
import { Container } from "@mui/material";
import { Sign } from "../../../shared/types";
import { Outlet } from "react-router-dom";
import { SearchBar } from "./SearchBar/SearchBar";

interface Props {
  selectedSigns: Sign[];
  toggleChecked: (arg0: Sign) => void;
}

const AddVocabForm = ({ selectedSigns, toggleChecked }: Props) => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "1em" }}>
      <SearchBar />
      <hr />
      <Outlet context={{ selectedSigns, toggleChecked }} />
    </Container>
  );
};

export default AddVocabForm;
