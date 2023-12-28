"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className='mr-4 hidden md:flex'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <span className='hidden font-bold sm:inline-block'>
          {siteConfig.name}
        </span>
      </Link>
      <nav className='flex items-center space-x-6 text-sm font-medium'>
        <Link
          href='/projects'
          className={cn(
            " transition-colors hover:text-foreground/80",
            pathname === "/projects" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Projects
        </Link>
        <Link
          href='/contact'
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/contact" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
