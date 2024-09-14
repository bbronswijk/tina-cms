import { Button } from "@/components/ui/button";
import { PageBlocksCall } from "../../../tina/__generated__/types";
import { ContentSection } from "@/components/layout/section";

export function CallToAction({ title, text }: PageBlocksCall) {
  return (
    <ContentSection
      className="rounded shadow-lg bg-gray-700 p-4 md:p-10 md:px-14 relative mx-auto -mb-[120px]"
      style={{ marginBottom: -120 }}
    >
      <h2 className="font-medium text-3xl text-center">{title}</h2>
      <p className="md:mx-12 mt-5 mb-8 text-center">{text}</p>
      <form className="flex flex-col md:flex-row gap-x-8 gap-y-4">
        <input
          className="flex-1 py-2 px-4 rounded-3xl"
          placeholder="email@example.com"
        />
        <Button>Get Started For Free</Button>
      </form>
    </ContentSection>
  );
}
