"use client";
import { useTina } from "tinacms/dist/react";
import { PageAndNavQuery } from "../../../tina/__generated__/types";
import { Hero } from "@/app/[...filename]/Hero";
import { Features } from "@/app/[...filename]/Features";
import { Promo } from "@/app/[...filename]/Promo";
import { Content } from "@/app/[...filename]/Content";
import { Testimonials } from "@/app/[...filename]/Testimonials";
import { CallToAction } from "@/app/[...filename]/CallToAction";
import { Header } from "@/components/layout/header";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PageAndNavQuery;
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
      <Header {...data.nav} />
      <main className="col-start-2 col-end-4 mt-20 space-y-40">
        {data.page.blocks?.map((block, i) => {
          switch (block?.__typename) {
            case "PageBlocksHero":
              return <Hero key={i + block.__typename} {...block} />;
            case "PageBlocksContent":
              return <Content key={i + block.__typename} {...block} />;
            case "PageBlocksFeatures":
              return <Features key={i + block.__typename} {...block} />;
            case "PageBlocksPromo":
              return <Promo key={i + block.__typename} {...block} />;
            case "PageBlocksTestimonials":
              return <Testimonials key={i + block.__typename} {...block} />;
            case "PageBlocksCall":
              return <CallToAction key={i + block.__typename} {...block} />;
            default:
              return null;
          }
        })}
      </main>
    </>
  );
}
