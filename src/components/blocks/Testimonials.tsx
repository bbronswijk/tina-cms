import Image from "next/image";
import { PageBlocksTestimonials } from "../../../tina/__generated__/types";

export function Testimonials(props: PageBlocksTestimonials) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {props?.items?.map(({ name, quote, image, role }) => (
        <article
          key={name}
          className="flex items-center flex-col bg-gray-700 py-10 px-8 rounded"
        >
          <p className="text-sm mb-4">{quote}</p>
          <footer className="grid grid-cols-[auto_1fr] w-full gap-x-2 items-center">
            {image && (
              <Image
                className="row-span-2 rounded-full"
                src={image}
                alt={name}
                width={28}
                height={28}
              />
            )}
            <h3 className="font-bold text-sm">{name}</h3>
            <p className="text-xs max-w-80">{role}</p>
          </footer>
        </article>
      ))}
    </section>
  );
}
