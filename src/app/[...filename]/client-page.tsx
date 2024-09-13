"use client";
import { useTina } from "tinacms/dist/react";
import type { PageQuery } from "../../../tina/__generated__/types";
import { PageBlocksHero } from "@/app/[...filename]/PageBlocksHero";
import { PageBlocksFeatures } from "@/app/[...filename]/PageBlocksFeatures";
import { PageBlocksPromo } from "@/app/[...filename]/PageBlocksPromo";
import { PageBlocksContent } from "@/app/[...filename]/PageBlocksContent";
import { PageBlocksTestimonials } from "@/app/[...filename]/PageBlocksTestimonials";
import { PageBlocksCallToAction } from "@/app/[...filename]/PageBlocksCallToAction";

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

  return (
    <>
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageBlocksHero":
            return <PageBlocksHero key={i + block.__typename} {...block} />;
          case "PageBlocksContent":
            return <PageBlocksContent key={i + block.__typename} {...block} />;
          case "PageBlocksFeatures":
            return <PageBlocksFeatures key={i + block.__typename} {...block} />;
          case "PageBlocksPromo":
            return <PageBlocksPromo key={i + block.__typename} {...block} />;
          case "PageBlocksTestimonials":
            return (
              <PageBlocksTestimonials key={i + block.__typename} {...block} />
            );
          case "PageBlocksCall":
            return (
              <PageBlocksCallToAction key={i + block.__typename} {...block} />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
