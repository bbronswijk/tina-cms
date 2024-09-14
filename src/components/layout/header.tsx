import Link from "next/link";
import Image from "next/image";
import { NavPartsFragment } from "../../../tina/__generated__/types";

export const Header = ({ items }: NavPartsFragment) => (
  <header className="flex flex-wrap gap-6 items-center justify-center py-8 col-[content]">
    <Link href="/" className="cursor-pointer">
      <Image src="/images/logo.svg" alt="Fylo logo" width={100} height={100} />
    </Link>
    <nav className="md:ml-auto space-x-4">
      {(items ?? [])
        .filter((link) => !!link)
        .map((link) => (
          <Link
            key={link.link?.id}
            href={link.link?._sys.filename ?? ""}
            className="hover:underline"
          >
            {link.title}
          </Link>
        ))}
    </nav>
  </header>
);
