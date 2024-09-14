import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PageBlocksContent } from "../../../tina/__generated__/types";
import { ContentSection } from "@/components/layout/section";

export function Content(props: PageBlocksContent) {
  return (
    <ContentSection>
      <TinaMarkdown content={props.body} />
    </ContentSection>
  );
}
