import { Button } from "@/components/ui/button";

export function PageBlocksCallToAction(props: {
  title?: string | null;
  text?: string | null;
}) {
  return (
    <section className="rounded shadow-lg col-start-1 col-end-5 bg-gray-700 py-10 px-14 max-w-[900px] relative mx-auto">
      <h2 className="font-medium text-3xl text-center">{props?.title}</h2>
      <p className="mx-12 mt-5 mb-8 text-center">{props?.text}</p>
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
