import AddVocabForm from "./AddVocabForm";
import { VocabList } from "./VocabList/VocabList";
import { useState } from "react";
import { Sign } from "../../shared/types";

export const Vocabulary = () => {
  const [selectedSigns, setSelectedSigns] = useState<Sign[]>([]);

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
      {/*<div className='flex flex-justify-center margin-vertical-small'>*/}
      {/*    <TextField*/}
      {/*        label="List Name..."*/}
      {/*        variant="filled"*/}
      {/*        value={vocabListName}*/}
      {/*        sx={{width: '50%'}}*/}
      {/*        onChange={(event) => setVocabListName(event.target.value)}*/}
      {/*    />*/}
      {/*</div>*/}
      {/*<hr/>*/}
      <div
        className="flex flex-justify-space-between flex-align-stretch"
        style={{ gap: "1em" }}
      >
        <VocabList vocabList={selectedSigns.map((sign) => sign.english)} />
        <AddVocabForm
          selectedSigns={selectedSigns}
          toggleChecked={toggleVocabWord}
        />
      </div>
    </>
  );
};
