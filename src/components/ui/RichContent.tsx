import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

export const RichContent = ({ content }: { content: TinaMarkdownContent }) => (
  <TinaMarkdown
    content={content}
    components={{
      h1: (props) => (
        <h1 className="text-4xl font-bold text-white">{props?.children}</h1>
      ),
      h2: (props) => (
        <h1 className="text-3xl font-bold text-white">{props?.children}</h1>
      ),
      h3: (props) => (
        <h1 className="text-2xl font-bold text-white">{props?.children}</h1>
      ),
      h4: (props) => (
        <h1 className="text-xl font-bold text-white">{props?.children}</h1>
      ),
      a: (props) => (
        <a className="text-blue-500 hover:text-blue-700" href={props?.url}>
          {props?.children}
        </a>
      ),
    }}
  />
);
