"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ViewVerticalIcon } from "@radix-ui/react-icons";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { linksConfig } from "@/config/links";
import { ScrollArea } from "./ui/scroll-area";
import { SidebarNavItem } from "@/types/nav";

const allProjects = [
  {
    slug: "unkey",
    title: "unkey",
    published: true,
    date: new Date(),
    description: "description",
  },
  {
    slug: "planetfall",
    title: "planetfall",
    published: true,
    date: new Date(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    slug: "highstorm",
    title: "highstorm",
    published: true,
    date: new Date(),
    description:
      "diculus mus. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Consectetur libero id faucibus nisl. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque",
  },
  {
    slug: "unkey1",
    title: "unkey",
    published: true,
    date: new Date(),
    description:
      "c. Euismod lacinia at quis risus sed vulputate odio. Amet aliquam id diam maecenas ultricies mi eget. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Magnis d",
  },
  {
    slug: "planetfall2",
    title: "planetfall",
    published: true,
    date: new Date(),
    description: "description",
  },
  {
    slug: "highstorm3",
    title: "highstorm",
    published: true,
    date: new Date(),
    description:
      "ue dignissim enim sit amet venenatis urna. Rutrum quisque non tellus orci ac. Egestas dui id ornare ar",
  },
  {
    slug: "unkey3",
    title: "unkey",
    published: true,
    date: new Date(),
    description: "description",
  },
  {
    slug: "planetfall3",
    title: "planetfall",
    published: true,
    date: new Date(),
    description: "description",
  },
  {
    slug: "highstorme",
    title: "highstorm",
    published: true,
    date: new Date(),
    description: "description",
  },
  {
    slug: "unkeye",
    title: "unkey",
    published: true,
    date: new Date(),
    description: "description",
  },
  {
    slug: "planetfall3e",
    title: "planetfalle",
    published: true,
    date: new Date(),
    description: "description",
  },
  {
    slug: "highstormee",
    title: "highstorm",
    published: true,
    date: new Date(),
    description: "description",
  },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
        >
          <svg
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
          >
            <path
              d='M3 5H11'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M3 12H16'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M3 19H21'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='pr-0'>
        <MobileLink
          href='/'
          className='flex items-center'
          onOpenChange={setOpen}
        >
          <span className='font-bold'>{siteConfig.name}</span>
        </MobileLink>
        <ScrollArea className='my-4 h-[calc(100vh-8rem)] pb-10 pl-6'>
          <div className='flex flex-col space-y-3'>
            {linksConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                )
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            {(
              [
                {
                  title: "Projects",
                  items: allProjects.map((p) => ({
                    // label: p.title,
                    title: p.title,
                    href: `/projects/${p.slug}`,
                    disabled: false,
                  })),
                },
              ] as SidebarNavItem[]
            ).map((item, index) => (
              <div key={index} className='flex flex-col space-y-3 pt-6'>
                <h4 className='font-medium'>{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <React.Fragment key={item.href}>
                      {!item.disabled &&
                        (item.href ? (
                          <MobileLink
                            href={item.href}
                            onOpenChange={setOpen}
                            className='text-muted-foreground'
                          >
                            {item.title}
                            {item.label && (
                              <span className='ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline'>
                                {item.label}
                              </span>
                            )}
                          </MobileLink>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
