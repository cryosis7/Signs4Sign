import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Sign } from "../../../../shared/types";
import {
  ADD_TO_VOCABULARY,
  ILLUSTRATION_OF_SIGN_FOR,
} from "../../../../shared/constants";
import { useNavigate } from "react-router-dom";
import { FeatureNames, isFeatureEnabled } from "../../../../shared/features";

interface Props {
  isSelected: boolean;
  sign: Sign;
  toggleChecked: (arg0: Sign) => void;
}

export const SignCard = ({ isSelected, sign, toggleChecked }: Props) => {
  const [image, setImage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setImage(require(`/src/assets/${sign.picture}`));
  }, [sign.picture]);

  const CARD_WIDTH = "200px";

  return (
    <Card raised={isSelected} sx={{ maxWidth: CARD_WIDTH }}>
      <CardActionArea
        onClick={() => navigate(`/sign/${encodeURI(sign.english)}`)}
      >
        {isFeatureEnabled(FeatureNames.MaoriNames) ? (
          <CardHeader title={sign.english} subheader={sign.maori} />
        ) : (
          <CardHeader title={sign.english} />
        )}
        <CardContent>
          <CardMedia
            component="img"
            image={image}
            alt={ILLUSTRATION_OF_SIGN_FOR + sign.english}
          />
          {sign.secondary && <Typography>{sign.secondary}</Typography>}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FormControlLabel
          label={ADD_TO_VOCABULARY}
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
