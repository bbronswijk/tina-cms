import { hero } from "../../src/components/blocks/hero.js";
import { features } from "../../src/components/blocks/features.js";
import { content } from "../../src/components/blocks/content.js";
import { promo } from "../../src/components/blocks/promo.js";
import { testimonials } from "../../src/components/blocks/testimonials.js";
import { callToAction } from "../../src/components/blocks/call-to-action.js";

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

      return `/${document._sys.filename}`;
    },
  },
};
