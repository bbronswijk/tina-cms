import { Metadata } from "next";
import "./global.css";

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
      <body className="bg-gray-800 text-white grid grid-cols-layout grid-rows-[auto,_1fr,_auto] min-h-dvh">
        {children}
      </body>
    </html>
  );
}
