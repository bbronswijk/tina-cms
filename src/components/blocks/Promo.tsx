import Image from "next/image";
import { PageBlocksPromo } from "../../../tina/__generated__/types";
import { BreakoutSection } from "@/components/layout/section";
import { RichContent } from "@/components/ui/RichContent";

export function Promo({ image, title, content }: PageBlocksPromo) {
  return (
    <BreakoutSection className="grid grid-cols-1 md:grid-cols-2  my-24 gap-12 items-center">
      <Image
        className="mx-auto max-w-full w-[500px]"
        src={image}
        alt="Illustration"
        width={600}
        height={600}
      />
      <article className="space-y-6 max-w-[60ch]">
        <h2 className="font-medium text-3xl">{title}</h2>
        <RichContent content={content} />
      </article>
    </BreakoutSection>
  );
}
