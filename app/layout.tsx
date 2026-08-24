import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hbbccebu-redesign.vercel.app"),
  title: "Home Bible Baptist Church Cebu",
  description:
    "Home Bible Baptist Church of Cebu City. Sunday worship, Bible teaching, children's outreach, and gospel ministry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
