import { Metadata } from "next";
import "./global.css";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fylo",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-800 text-white grid grid-cols-layout">
        {children}

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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
              <div className="space-y-4 text-sm list-none">
                <div className="flex text-sm gap-4 align-baseline">
                  <PhoneCall className="h-6 min-w-6" />
                  <span>+1-543-123-4567</span>
                </div>
                <div className="flex text-sm gap-4 align-baseline">
                  <Mail className="h-6 min-w-6" /> <span>example@fylo.com</span>
                </div>
              </div>

              <nav className="grid grid-cols-2">
                <ul className="space-y-4">
                  <li>About Us</li>
                  <li>Jobs</li>
                  <li>Press</li>
                  <li>Blog</li>
                </ul>
                <ul className="space-y-4">
                  <li>Contact Us</li>
                  <li>Terms</li>
                  <li>Privacy</li>
                </ul>
              </nav>

              <div className="flex gap-4 justify-end">
                <Facebook />
                <Twitter />
                <Instagram />
              </div>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
