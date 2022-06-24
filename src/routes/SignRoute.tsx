import { Sign } from "../components/Vocabulary/Sign";
import { useParams } from "react-router-dom";

export const SignRoute = () => {
  const params = useParams();

  return params.signName ? <Sign signName={params.signName} /> : <></>;
};
