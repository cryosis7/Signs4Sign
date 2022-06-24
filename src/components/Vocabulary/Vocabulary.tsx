import AddVocabForm from "./AddVocabForm/AddVocabForm";
import { VocabList } from "./VocabList/VocabList";
import React, { useState } from "react";
import { Sign } from "../../shared/types";
import { useMediaQuery, useTheme } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";

export const Vocabulary = () => {
  const theme = useTheme();
  const usingSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedSigns, setSelectedSigns] = useState<Sign[]>([]);
  const [isVocabDrawerOpen, setIsVocabDrawerOpen] = useState<boolean>(false);

  const toggleVocabWord = (sign: Sign) => {
    const index = selectedSigns.indexOf(sign);
    if (index !== -1) {
      setSelectedSigns(selectedSigns.filter((el) => el !== sign));
    } else {
      setSelectedSigns([...selectedSigns, sign]);
    }
  };

  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: "auto" }}>
        <Toolbar>
          {usingSmallScreen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setIsVocabDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />

      <div
        className="flex flex-justify-space-between flex-align-stretch"
        style={{ gap: "1em" }}
      >
        <VocabList
          vocabList={selectedSigns.map((sign) => sign.english)}
          usingSmallScreen={usingSmallScreen}
          isDrawerOpen={isVocabDrawerOpen}
          setIsDrawerOpen={(state: boolean) => setIsVocabDrawerOpen(state)}
        />
        <AddVocabForm
          selectedSigns={selectedSigns}
          toggleChecked={toggleVocabWord}
        />
      </div>
    </>
  );
};
