import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import signDictionary from "../../../dictionary/nzsl.json";
import React, { useEffect, useState } from "react";
import { Sign as SignType } from "../../../shared/types";
import {
  ILLUSTRATION_OF_SIGN_FOR,
  NZSL_SIGN_URL,
} from "../../../shared/constants";

export const Sign = ({ signName }: { signName: string }) => {
  const [sign, setSign] = useState<SignType>();
  const [image, setImage] = useState();
  const [signId, setSignId] = useState("");

  useEffect(() => {
    const cleanedSearchTerm = signName.toLowerCase().trim();
    if (!cleanedSearchTerm) {
      return;
    }

    const sign = signDictionary.find(
      (sign) => sign.english.toLowerCase() === cleanedSearchTerm
    );
    if (!sign) {
      return;
    }

    setSign(sign);
    setImage(require(`/src/assets/${sign.picture}`));
    setSignId(sign.picture.replace(/^.*_(?=\d{3,4}_)/, "").replace(/\D/g, ""));
  }, []);

  if (!sign) {
    return <></>;
  }

  return (
    <Card>
      <CardHeader title={sign.english} subheader={sign.maori} />
      <CardContent>
        <CardMedia
          component="img"
          image={image}
          alt={ILLUSTRATION_OF_SIGN_FOR + sign.english}
        />
        {sign.secondary && <Typography>{sign.secondary}</Typography>}
        {signId && (
          <Typography variant="body2">
            See this word in the{" "}
            {
              <a href={NZSL_SIGN_URL + signId} target={"_blank"}>
                NZSL dictionary
              </a>
            }
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
