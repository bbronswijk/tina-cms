import { hero } from "./blocks/hero";
import { features } from "./blocks/features";
import { content } from "./blocks/content";
import { promo } from "./blocks/promo";
import { testimonials } from "./blocks/testimonials";
import { callToAction } from "./blocks/call-to-action";

/**
 * @type {import('tinacms').Collection}
 */
export const page = {
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
      templates: [hero, features, content, promo, testimonials, callToAction],
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
