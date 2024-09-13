import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

export function PageBlocksContent(props: { body?: TinaMarkdownContent }) {
  return props.body ? <TinaMarkdown content={props.body ?? ""} /> : null;
}
