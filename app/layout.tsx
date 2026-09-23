import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

const favicon =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%230A0A0B'/><text x='50%25' y='52%25' dominant-baseline='middle' text-anchor='middle' font-family='ui-monospace,monospace' font-size='30' font-weight='600' fill='%23C8A97E'>RE</text></svg>";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    type: "website",
  },
  icons: { icon: favicon },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
