"use client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery } from "../../../tina/__generated__/types";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
}

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body;
  const blocks = data.page.blocks;
  return (
    <div>
      <div data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown content={content} />
      </div>

      <div data-tina-field={tinaField(data.page, "testimonial")}>
        {data.page.testimonial?.author}
        {data.page.testimonial?.role}
        {data.page.testimonial?.quote}
      </div>

      <div>
        {blocks
          ? blocks.map(function (block, i) {
              switch (block?.__typename) {
                case "PageBlocksContent":
                  return (
                    <div
                      data-tina-field={tinaField(data.page.blocks, i)}
                      key={i + block.__typename}
                    >
                      {block?.__typename}
                    </div>
                  );
                case "PageBlocksHero":
                  return (
                    <div key={i + block.__typename}>{block?.__typename}</div>
                  );
                case "PageBlocksFeatures":
                  return (
                    <div key={i + block.__typename}>{block?.__typename}</div>
                  );
                default:
                  return null;
              }
            })
          : null}
      </div>
    </div>
  );
}
