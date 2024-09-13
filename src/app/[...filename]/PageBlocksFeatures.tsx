import Image from "next/image";
import React from "react";

export function PageBlocksFeatures(
  props:
    | {
        items?: (UspsProps | null)[] | null | undefined;
      }
    | undefined
    | null,
) {
  return (
    <section className="grid grid-cols-2 gap-12">
      {props?.items?.map((feature) => (
        <Usp
          key={feature?.title}
          image={feature?.image}
          title={feature?.title}
          text={feature?.text}
        />
      ))}
    </section>
  );
}

interface UspsProps {
  image?: string | null | undefined;
  title?: string | null | undefined;
  text?: string | null | undefined;
}

function Usp({
  image,
  title,
  text,
}: {
  image?: string | null | undefined;
  title?: string | null | undefined;
  text?: string | null | undefined;
}) {
  return (
    <div className="flex items-center flex-col text-center">
      {image && <Image src={image} alt={title ?? ""} width={70} height={70} />}
      <h3 className="font-bold mt-5 mb-2 text-xl">{title}</h3>
      <p className="text-sm max-w-80">{text}</p>
    </div>
  );
}
