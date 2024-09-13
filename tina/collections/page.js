const heroBlock = {
  name: "hero",
  label: "Hero",
  ui: {
    defaultItem: {
      headline:
        "All your files in one secure location,\n" + "accessible anywhere",
      text: "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.",
    },
  },
  fields: [
    {
      label: "Hero Image",
      name: "hero",
      type: "image",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      label: "Text",
      name: "text",
      ui: {
        component: "textarea",
      },
    },
  ],
};

const featureBlock = {
  name: "features",
  label: "Features",
  fields: [
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      fields: [
        {
          label: "Image",
          name: "image",
          type: "image",
        },
        {
          label: "Title",
          type: "string",
          name: "title",
          ui: {
            component: "textarea",
          },
        },
        {
          label: "Text",
          type: "string",
          name: "text",
        },
      ],
    },
  ],
};

const contentBlock = {
  name: "content",
  label: "Content",
  fields: [
    {
      type: "rich-text",
      label: "Body",
      name: "body",
    },
  ],
};

const promoBlock = {
  name: "promo",
  label: "Promo",
  fields: [
    {
      label: "Image",
      name: "image",
      type: "image",
    },
    {
      label: "Title",
      type: "string",
      name: "title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "rich-text",
      label: "Content",
      name: "content",
    },
  ],
};

const testimonialsBlock = {
  name: "testimonials",
  label: "Testimonials",
  fields: [
    {
      type: "object",
      label: "Testimonials",
      name: "items",
      list: true,
      fields: [
        {
          label: "Image",
          name: "image",
          type: "image",
        },
        {
          label: "Quote",
          type: "string",
          name: "quote",
          ui: {
            component: "textarea",
          },
        },
        {
          label: "Name",
          type: "string",
          name: "name",
        },
        {
          label: "Role",
          type: "string",
          name: "role",
        },
      ],
    },
  ],
};

const callToActionBlock = {
  name: "call",
  label: "Call to Action",
  fields: [
    {
      label: "Title",
      type: "string",
      name: "title",
    },
    {
      label: "Content",
      type: "string",
      name: "text",
      ui: {
        component: "textarea",
      },
    },
  ],
};

/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      templates: [
        heroBlock,
        featureBlock,
        contentBlock,
        promoBlock,
        testimonialsBlock,
        callToActionBlock,
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
  },
};
