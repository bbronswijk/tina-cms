import { image, richText, textarea } from "../utils/fields";

export const promo = {
  name: "promo",
  label: "Promo",
  fields: [image(), textarea("Title"), richText("Content")],
};
