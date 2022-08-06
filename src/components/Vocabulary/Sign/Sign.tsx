import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import signDictionary from "../../../dictionary/nzsl.json";
import React, { useEffect, useState } from "react";
import { Sign as SignType } from "../../../shared/types";
import {
  ILLUSTRATION_OF_SIGN_FOR,
  NZSL_DICTIONARY,
  NZSL_SIGN_URL,
  SEE_MORE_TEXT,
} from "../../../shared/constants";
import { FeatureNames, isFeatureEnabled } from "../../../shared/features";

export const Sign = ({ signName }: { signName: string }) => {
  const [sign, setSign] = useState<SignType>();
  // const [image, setImage] = useState();
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
    setSignId(sign.picture.replace(/^.*_(?=\d{3,4}_)/, "").replace(/\D/g, ""));
  }, [signName]);

  //TODO: Scale sign for different screens.
  return !sign ? (
    <></>
  ) : (
    <Card>
      {isFeatureEnabled(FeatureNames.MaoriNames) ? (
        <CardHeader title={sign.english} subheader={sign.maori} />
      ) : (
        <CardHeader title={sign.english} />
      )}
      <Grid
        container
        spacing={2}
        component={CardContent}
        direction="column"
        justifyContent="space-around"
        alignContent="center"
      >
        <Grid item>
          <img
            src={require(`/src/assets/${sign.picture}`)}
            alt={ILLUSTRATION_OF_SIGN_FOR + sign.english}
          />
        </Grid>
        <Grid item>
          {sign.secondary && <Typography>{sign.secondary}</Typography>}
        </Grid>
        {signId && (
          <Grid item>
            <Typography variant="body2">
              {SEE_MORE_TEXT}
              {
                <a
                  href={NZSL_SIGN_URL + signId}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {NZSL_DICTIONARY}
                </a>
              }
            </Typography>
          </Grid>
        )}
      </Grid>
    </Card>
  );
};
