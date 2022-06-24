import React, { useState } from "react";
import { Container } from "@mui/material";
import { Sign } from "../../../shared/types";
import { Outlet } from "react-router-dom";
import { SearchBar } from "./SearchBar/SearchBar";

interface Props {
  selectedSigns: Sign[];
  toggleChecked: (arg0: Sign) => void;
}

const DisplaySignSection = ({ selectedSigns, toggleChecked }: Props) => {
  return (
    <div className="fullWidth">
      <SearchBar />
      <hr />
      <Outlet context={{ selectedSigns, toggleChecked }} />
    </div>
  );
};

export default DisplaySignSection;
