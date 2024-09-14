import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageBlocksHero } from "../../../tina/__generated__/types";
import { ContentSection } from "@/components/layout/section";

export function Hero(props: PageBlocksHero) {
  return (
    <ContentSection className="text-center">
      <Image
        className="mx-auto"
        src={props.image}
        alt="Illustration"
        width={650}
        height={650}
      />
      <h1 className="font-medium text-3xl">{props?.title}</h1>
      <p className="max-w-[60ch] mx-auto mt-8 mb-5">{props?.text}</p>
      <Button>Get Started</Button>
    </ContentSection>
  );
}
