import { image, textarea } from "../utils/fields";

export const hero = {
  name: "hero",
  label: "Hero",
  ui: {
    defaultItem: {
      title: "All your files in one secure location,\n" + "accessible anywhere",
      text: "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.",
    },
  },
  fields: [image(), textarea("Title"), textarea()],
};
