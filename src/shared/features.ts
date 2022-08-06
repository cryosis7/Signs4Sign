export interface Feature {
  name: string;
  description?: string;
  active: boolean;
}

export const FeatureNames = {
  MaoriNames: "MaoriNames",
};

export const features: Feature[] = [
  {
    name: FeatureNames.MaoriNames,
    description: "Controls whether Maori names are enabled",
    active: false,
  },
];

export const isFeatureEnabled = (featureName: string) => {
  const features: Feature[] = JSON.parse(localStorage.getItem("flags") ?? "");
  const feature = features.find((feature) => feature.name === featureName);

  console.log(
    "Evaluated feature: ",
    featureName,
    " = ",
    feature && feature.active
  );
  return feature && feature.active;
};
