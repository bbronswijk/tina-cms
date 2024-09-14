import { title } from "./utils/fields";

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
    {
      label: "Links",
      name: "links",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.link }),
      },
      fields: [
        title(),
        {
          label: "Link",
          name: "link",
          type: "reference",
          collections: ["page"],
        },
      ],
    },
  ],
};
