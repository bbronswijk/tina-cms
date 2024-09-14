import Link from "next/link";
import Image from "next/image";
import { NavPartsFragment } from "../../../tina/__generated__/types";

export const Header = ({ links }: NavPartsFragment) => (
  <header className="flex col-start-2 col-end-4 items-center py-8">
    <Link href="/" className="cursor-pointer">
      <Image src="/images/logo.svg" alt="Fylo logo" width={100} height={100} />
    </Link>
    <nav className="ml-auto space-x-4">
      {(links ?? [])
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
