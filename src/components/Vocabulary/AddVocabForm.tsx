import React, { SetStateAction, useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { Container } from "@mui/material";
import { SearchResults } from "./SearchResults/SearchResults";
import { Sign } from "../../shared/types";

interface Props {
  selectedSigns: Sign[];
  toggleChecked: (arg0: Sign) => void;
}

const AddVocabForm = ({ selectedSigns, toggleChecked }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <Container maxWidth="md" sx={{ marginTop: "1em" }}>
      <SearchBar setSearchTerm={setSearchTerm} />
      <hr />
      <SearchResults
        searchTerm={searchTerm}
        checkedList={selectedSigns}
        toggleChecked={toggleChecked}
      />
    </Container>
  );
};

export default AddVocabForm;
