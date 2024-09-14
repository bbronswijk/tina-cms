import { image, list, string, textarea } from "../utils/fields";

export const testimonials = {
  name: "testimonials",
  label: "Testimonials",
  fields: [
    list("Testimonials", "name", [
      image(),
      textarea("Quote"),
      string("Name"),
      string("Role"),
    ]),
  ],
};
