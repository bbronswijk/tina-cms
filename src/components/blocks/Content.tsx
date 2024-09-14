import { PageBlocksContent } from "../../../tina/__generated__/types";
import { ContentSection } from "@/components/layout/section";
import { RichContent } from "@/components/ui/RichContent";

export function Content(props: PageBlocksContent) {
  return (
    <ContentSection className="prose text-white w-full">
      <RichContent content={props.body} />
    </ContentSection>
  );
}
