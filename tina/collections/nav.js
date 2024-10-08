import { list, title } from "./utils/fields";

/**
 * @type {import('tinacms').Collection}
 */
export const nav = {
  label: "Navigatie",
  name: "nav",
  path: "content/nav",
  format: "md",
  ui: {
    allowedActions: {
      create: false,
      update: false,
    },
    global: true,
  },
  fields: [
    list("Navigatie items", "title", [
      title(),
      {
        label: "Link",
        name: "link",
        type: "reference",
        collections: ["page"],
      },
    ]),
  ],
};
