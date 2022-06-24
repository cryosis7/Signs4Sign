import { Typography } from "@mui/material";
import { Sign as SignType } from "../../shared/types";

export const Sign = ({ signName }: { signName: string }) => {
  return (
    <div>
      <Typography variant="h1">{signName}</Typography>
      <Typography>Go search for {signName}</Typography>
    </div>
  );
};
