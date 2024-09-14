/**
 * Watch out to not mix names for different types of fields.
 */
export const image = (label = "Image", required = true) => ({
  label,
  required,
  name: getNameFromLabel(label),
  type: "image",
});

export const textarea = (label = "text", required = true) => ({
  ...string(label, required),
  ui: {
    component: "textarea",
  },
});

export const list = (label = "Items", listItemKey, fields = []) => ({
  type: "object",
  label: label,
  name: "items",
  list: true,
  required: true,
  ui: {
    itemProps: (item) => ({ label: item[listItemKey] }),
  },
  fields,
});

export const richText = (label = "Rich Content", required = true) => ({
  label,
  required,
  type: "rich-text",
  name: getNameFromLabel(label),
});

export const title = (label = "Title", required = true) =>
  string(label, required);

export const string = (label = "string", required = true) => ({
  label,
  required,
  type: "string",
  name: getNameFromLabel(label),
});

const getNameFromLabel = (label) => label.toLowerCase().replace(/\s/g, "_");
