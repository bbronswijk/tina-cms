import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PageBlocksContent } from "../../../tina/__generated__/types";

export function Content(props: PageBlocksContent) {
  return <TinaMarkdown content={props.body} />;
}
