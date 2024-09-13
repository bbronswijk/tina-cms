import Image from "next/image";
import React from "react";

export function PageBlocksTestimonials(
  props:
    | {
        items?: (TestimonialProps | null)[] | null | undefined;
      }
    | undefined
    | null,
) {
  return (
    <section className="grid grid-cols-3 gap-x-12">
      {props?.items?.map((feature) => (
        <Testimonial key={feature?.name} {...feature} />
      ))}
    </section>
  );
}

interface TestimonialProps {
  image?: string | null;
  quote?: string | null;
  name?: string | null;
  role?: string | null;
}

const Testimonial = ({ image, name, role, quote }: TestimonialProps) => (
  <article className="flex items-center flex-col bg-gray-700 py-10 px-8 rounded">
    <p className="text-sm mb-4">{quote}</p>
    <footer className="grid grid-cols-[auto_1fr] w-full gap-x-2 items-center">
      {image && (
        <Image
          className="row-span-2 rounded-full"
          src={image}
          alt={name ?? ""}
          width={28}
          height={28}
        />
      )}
      <h3 className="font-bold text-sm">{name}</h3>
      <p className="text-xs max-w-80">{role}</p>
    </footer>
  </article>
);
