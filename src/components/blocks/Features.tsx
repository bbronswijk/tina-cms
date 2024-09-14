import Image from "next/image";
import { PageBlocksFeatures } from "../../../tina/__generated__/types";

export function Features(props: PageBlocksFeatures) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {props?.items?.map(({ title, image, text }) => (
        <div key={title} className="flex items-center flex-col text-center">
          <Image src={image} alt={title} width={70} height={70} />
          <h3 className="font-bold mt-5 mb-2 text-xl">{title}</h3>
          <p className="text-sm max-w-80">{text}</p>
        </div>
      ))}
    </section>
  );
}
