import AddVocabForm from "./AddVocabForm";
import { VocabList } from "./VocabList/VocabList";
import { useState } from "react";
import { Sign } from "../../shared/types";
import { Grid, TextField } from "@mui/material";

export const Vocabulary = () => {
  const [selectedSigns, setSelectedSigns] = useState<Sign[]>([]);
  const [vocabListName, setVocabListName] = useState<string>("");

  const toggleVocabWord = (sign: Sign) => {
    const index = selectedSigns.indexOf(sign);
    if (index !== -1) {
      setSelectedSigns(selectedSigns.filter((el) => el !== sign));
    } else {
      setSelectedSigns([...selectedSigns, sign]);
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} className={"debug"}>
        <TextField
          label="Vocabulary List Name"
          variant="standard"
          value={vocabListName}
          sx={{ border: "1px solid green" }}
          onChange={(event) => setVocabListName(event.target.value)}
        />
      </Grid>
      <Grid item xs={3} lg={2}>
        <VocabList
          vocabList={selectedSigns.map((sign) => sign.english)}
          vocabListName={vocabListName}
        />
      </Grid>
      <Grid item xs={8} lg={9}>
        <AddVocabForm
          selectedSigns={selectedSigns}
          toggleChecked={toggleVocabWord}
        />
      </Grid>
    </Grid>
  );
};
