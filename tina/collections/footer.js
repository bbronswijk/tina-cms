import { textarea, string, title, list } from "./utils/fields";

/**
 * @type {import('tinacms').Collection}
 */
export const footer = {
  label: "Footer",
  name: "footer",
  path: "content/footer",
  format: "md",
  ui: {
    allowedActions: {
      create: false,
      update: false,
    },
    global: true,
  },
  fields: [
    textarea("About"),
    string("Phone"),
    string("Email"),
    list("Links", "title", [
      title(),
      {
        label: "Link",
        name: "link",
        type: "reference",
        collections: ["page"],
      },
    ]),
    string("Facebook"),
    string("Twitter"),
    string("Instagram"),
  ],
};
