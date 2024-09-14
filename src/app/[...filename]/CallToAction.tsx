import { Button } from "@/components/ui/button";
import { PageBlocksCall } from "../../../tina/__generated__/types";

export function CallToAction({ title, text }: PageBlocksCall) {
  return (
    <section
      className="rounded shadow-lg col-start-1 col-end-5 bg-gray-700 py-10 px-14 max-w-[900px] relative mx-auto"
      style={{ marginBottom: -120 }}
    >
      <h2 className="font-medium text-3xl text-center">{title}</h2>
      <p className="mx-12 mt-5 mb-8 text-center">{text}</p>
      <form className="flex gap-8">
        <input
          className="flex-1 py-2 px-4 rounded-3xl"
          placeholder="email@example.com"
        />
        <Button>Get Started For Free</Button>
      </form>
    </section>
  );
}
