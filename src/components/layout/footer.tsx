import Image from "next/image";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
} from "lucide-react";
import { FooterPartsFragment } from "../../../tina/__generated__/types";
import Link from "next/link";

export const Footer = (props: FooterPartsFragment) => (
  <footer className="grid grid-cols-subgrid col-start-1 col-end-5 bg-gray-900 text-white py-40">
    <section className="grid col-start-2 col-end-4 pt-16">
      <Image
        className="mb-10"
        src="/images/logo.svg"
        alt="Fylo logo"
        width={150}
        height={150}
      />
      <div className="grid grid-cols-4 gap-x-10">
        <div className="flex text-sm gap-4 align-baseline">
          <MapPin className="h-6 min-w-6" />
          <p>{props.about}</p>
        </div>
        <div className="space-y-4 text-sm list-none">
          <div className="flex text-sm gap-4 align-baseline">
            <PhoneCall className="h-6 min-w-6" />
            <span>{props.phone}</span>
          </div>
          <div className="flex text-sm gap-4 align-baseline">
            <Mail className="h-6 min-w-6" /> <span>{props.email}</span>
          </div>
        </div>

        <ul className="whitespace-nowrap gap-y-4 gap-x-12 grid grid-cols-2">
          {(props.items ?? [])
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
        </ul>

        <div className="flex gap-4 justify-end">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>
    </section>
  </footer>
);
