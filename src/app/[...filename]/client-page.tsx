"use client";
import { useTina } from "tinacms/dist/react";
import { PageAndNavQuery } from "../../../tina/__generated__/types";
import { Hero } from "@/components/blocks/Hero";
import { Features } from "@/components/blocks/Features";
import { Promo } from "@/components/blocks/Promo";
import { Content } from "@/components/blocks/Content";
import { Testimonials } from "@/components/blocks/Testimonials";
import { CallToAction } from "@/components/blocks/CallToAction";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
      <main className="grid col-start-1 -col-end-1 mt-20 space-y-40 grid-cols-subgrid">
        <Blocks blocks={data.page.blocks} />
      </main>
      <Footer {...data.footer} />
    </>
  );
}

const Blocks = ({ blocks }: { blocks: PageAndNavQuery["page"]["blocks"] }) => (
  <>
    {blocks?.map((block, i) => {
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
  </>
);
