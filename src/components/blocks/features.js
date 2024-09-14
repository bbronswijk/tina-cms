import {
  image,
  list,
  textarea,
  title,
} from "../../../tina/collections/utils/fields";

export const features = {
  name: "features",
  label: "Features",
  fields: [
    list("Feature Items", title().label, [image(), title(), textarea()]),
  ],
};
