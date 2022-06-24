import { useParams, useOutletContext } from "react-router-dom";
import { SearchResults } from "../components/Vocabulary/AddVocabForm/SearchResults/SearchResults";
import { Sign } from "../shared/types";

type ContextType = {
  selectedSigns: Sign[];
  toggleChecked: (arg0: Sign) => void;
};

export const SearchRoute = () => {
  const params = useParams();
  const context = useOutletContext<ContextType>();

  return (
    <SearchResults
      searchTerm={params.searchTerm || ""}
      checkedList={context.selectedSigns}
      toggleChecked={context.toggleChecked}
    />
  );
};
