import React, { useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { Container } from "@mui/material";
import { SearchResults } from "./SearchBar/SearchResults";

interface Sign {
  english: string;
  maori: string;
  secondary: string;
  picture: string;
  video: string;
  handShape: string;
  location: string;
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [checkedSigns, setCheckedSigns] = useState<Sign[]>([]);

  const toggleChecked = (sign: Sign) => {
    const index = checkedSigns.indexOf(sign);
    if (index !== -1) {
      setCheckedSigns(checkedSigns.filter((el) => el !== sign));
    } else {
      setCheckedSigns([...checkedSigns, sign]);
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: "1em" }}>
      <SearchBar setSearchTerm={setSearchTerm} />
      <hr />
      <SearchResults
        searchTerm={searchTerm}
        checkedList={checkedSigns}
        toggleChecked={toggleChecked}
      />
    </Container>
  );
};

export default App;
