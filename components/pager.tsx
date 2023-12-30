import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
// import { project } from "contentlayer/generated"
import { NavItem, NavItemWithChildren } from "@/types/nav";

import { cn } from "@/lib/utils";
import { projectsConfig } from "@/config/projects";
import { buttonVariants } from "./ui/button";

interface ProjectsPagerProps {
  project: any;
}

export function ProjectsPager({ project }: ProjectsPagerProps) {
  const pager = getPagerForProject(project);
  if (!pager) {
    return null;
  }

  return (
    <div className='flex flex-row items-center justify-between'>
      {pager?.prev?.href && (
        <Link
          href={pager.prev.href}
          className={buttonVariants({ variant: "outline" })}
        >
          <ChevronLeftIcon className='mr-2 h-4 w-4' />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "outline" }), "ml-auto")}
        >
          {pager.next.title}
          <ChevronRightIcon className='ml-2 h-4 w-4' />
        </Link>
      )}
    </div>
  );
}

export function getPagerForProject(project: any) {
  const flattenedLinks = [null, ...flatten(projectsConfig.sidebarNav), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => project.slug === link?.href
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;

  return {
    prev,
    next,
  };
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link);
    }, [])
    .filter((link) => !link?.disabled);
}
