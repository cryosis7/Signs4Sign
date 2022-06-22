import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React from "react";
import { Sign } from "../../../shared/types";

interface Props {
  isSelected: boolean;
  sign: Sign;
  toggleChecked: (arg0: Sign) => void;
}

export const SignCard = ({ isSelected, sign, toggleChecked }: Props) => {
  return (
    <Card raised={isSelected} onClick={() => toggleChecked(sign)}>
      <CardHeader title={sign.english} subheader={sign.maori} />
      {sign.secondary && (
        <CardContent>
          {sign.secondary && <Typography>{sign.secondary}</Typography>}
        </CardContent>
      )}
      <CardActions>
        <FormControlLabel
          label="Add To Vocabulary"
          control={
            <Checkbox
              checked={isSelected}
              onChange={() => toggleChecked(sign)}
              aria-label={sign.english}
            />
          }
        />
      </CardActions>
    </Card>
  );
};
