import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";

export function PageBlocksHero(props: {
  hero?: string | null;
  headline?: string | null;
  text?: string | null;
}) {
  return (
    <section className="text-center">
      <Image
        className="mx-auto"
        src={props?.hero ?? ""}
        alt="Illustration"
        width={650}
        height={650}
      />
      <h1 className="font-medium text-3xl">{props?.headline}</h1>
      <p className="max-w-[60ch] mx-auto mt-8 mb-5">{props?.text}</p>
      <Button>Get Started</Button>
    </section>
  );
}
