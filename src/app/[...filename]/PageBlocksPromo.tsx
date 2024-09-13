import Image from "next/image";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

export function PageBlocksPromo(props: {
  image?: string | null;
  title?: string | null;
  content?: TinaMarkdownContent;
}) {
  return (
    <section className="grid grid-cols-2 my-24 gap-x-12 items-center">
      <Image
        className="mx-auto"
        src={props.image ?? ""}
        alt="Illustration"
        width={600}
        height={600}
      />
      <article className="space-y-6 max-w-[60ch]">
        <h2 className="font-medium text-3xl">{props?.title}</h2>
        {props.content && <TinaMarkdown content={props.content} />}
      </article>
    </section>
  );
}
