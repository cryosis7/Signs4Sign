import wordList from "../../dictionary/wordlist.json";
import { Card, CardContent, Typography } from "@mui/material";

interface Props {
  searchTerm: string;
}

export const SearchResults = ({ searchTerm }: Props) => {
  const matchingWords =
    searchTerm.length <= 3
      ? wordList.filter((word) => word.startsWith(searchTerm))
      : wordList.filter((word) => word.includes(searchTerm));

  return (
    <>
      {matchingWords.map((word) => (
        <Card>
          <CardContent>
            <Typography>{word}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
