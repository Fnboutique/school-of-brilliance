import type { Metadata } from "next";
import ComingSoon from "@/components/sections/ComingSoon";

export const metadata: Metadata = { title: "Coming soon", robots: { index: false, follow: true } };

/** Temporary catch-all: every page not built yet shows this. Delete once all pages exist. */
export default function PlaceholderPage() {
  return <ComingSoon />;
}
