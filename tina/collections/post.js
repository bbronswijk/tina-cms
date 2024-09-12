/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Blog Posts",
  name: "post",
  path: "content/post",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Blog Post Body",
      name: "body",
      isBody: true,
      ui: {
        component: "textarea",
      },
    },
    {
      label: "Testimonial",
      name: "testimonial",
      type: "object",
      fields: [
        {
          label: "Author",
          name: "author",
          type: "string",
        },
        {
          label: "Role",
          name: "role",
          type: "string",
        },
        {
          label: "Quote",
          name: "quote",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
  },
};
