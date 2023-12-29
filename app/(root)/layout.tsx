import { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <div className='relative flex min-h-screen flex-col   bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0'>
      <SiteHeader />
      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </div>
  );
}
