import { Card } from "@/components/card";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Github, Mail, Twitter } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

const socials = [
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/thebigbengi",
    label: "Twitter",
    handle: "@thebigbengi",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:dev@chronark.com",
    label: "Email",
    handle: "dev@thebigbengi.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/thebigbengi",
    label: "Github",
    handle: "theBigBengi",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description: "Check out some examples app built using the components.",
};

export default function Example() {
  return (
    <div className='container relative pb-12'>
      <div className='space-y-8  md:space-y-16 '>
        <PageHeader>
          <PageHeaderHeading>Contact</PageHeaderHeading>
          <PageHeaderDescription>
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </PageHeaderDescription>
        </PageHeader>

        <div className=' flex items-center justify-center h-full'>
          <div className='grid w-full grid-cols-1 gap-8 mx-auto  sm:mt-0 sm:grid-cols-3 lg:gap-16'>
            {socials.map((s) => (
              <Card key={s.href}>
                <Link
                  href={s.href}
                  target='_blank'
                  className='p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16'
                >
                  <span
                    className='absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent'
                    aria-hidden='true'
                  />
                  <span className='relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-600 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white group-hover:bg-zinc-50 dark:group-hover:bg-zinc-900 border-zinc-500 bg-zinc-50 dark:bg-zinc-900 group-hover:border-zinc-600 dark:group-hover:border-zinc-200 drop-shadow-orange'>
                    {s.icon}
                  </span>{" "}
                  <div className='z-10 flex flex-col items-center'>
                    <span className='lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-600 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white font-display'>
                      {s.handle}
                    </span>
                    <span className='mt-4 text-sm text-center duration-1000 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200'>
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
