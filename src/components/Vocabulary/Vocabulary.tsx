import DisplaySignSection from "./AddVocabForm/DisplaySignSection";
import { VocabList } from "./VocabList/VocabList";
import React, { useState } from "react";
import { Sign } from "../../shared/types";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import { MenuBar } from "./MenuBar/MenuBar";

export const Vocabulary = () => {
  const theme = useTheme();
  const usingSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const usingLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

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
      <MenuBar
        usingSmallScreen={usingSmallScreen}
        setIsVocabDrawerOpen={setIsVocabDrawerOpen}
      />

      <Container
        maxWidth={usingLargeScreen ? "lg" : false}
        className="margin-vertical"
      >
        <div
          className="flex flex-justify-space-around flex-align-stretch"
          style={{ gap: "1em" }}
        >
          <VocabList
            vocabList={selectedSigns.map((sign) => sign.english)}
            usingSmallScreen={usingSmallScreen}
            isDrawerOpen={isVocabDrawerOpen}
            setIsDrawerOpen={(state: boolean) => setIsVocabDrawerOpen(state)}
          />
          <DisplaySignSection
            selectedSigns={selectedSigns}
            toggleChecked={toggleVocabWord}
          />
        </div>
      </Container>
    </>
  );
};
