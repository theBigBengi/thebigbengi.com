import { notFound } from "next/navigation";
// import { allDocs } from "contentlayer/generated"

import "@/styles/mdx.css";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Balancer from "react-wrap-balancer";

import { siteConfig } from "@/config/site";
// import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl, cn } from "@/lib/utils";
// import { Mdx } from "@/components/mdx-components"
import { ProjectsPager } from "@/components/pager";
import { ScrollArea } from "@/components/ui/scroll-area";
import { badgeVariants } from "@/components/ui/badge";
// import { DashboardTableOfContents } from "@/components/toc"
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import { getTableOfContents } from "@/lib/toc";
import { DashboardTableOfContents } from "@/components/toc";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";

interface ProjectPageProps {
  params: {
    slug: string[];
  };
}

async function getProjectFromParams({ params }: ProjectPageProps) {
  const slug = params.slug?.join("/") || "";
  const project = allProjects.find((project) => project.slugAsParams === slug);

  if (!project) {
    return null;
  }

  return project;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectFromParams({ params });

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: absoluteUrl(project.slug),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [siteConfig.ogImage],
      creator: "@shadcn",
    },
  };
}

export async function generateStaticParams(): Promise<
  ProjectPageProps["params"][]
> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams.split("/"),
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams({ params });

  if (!project) {
    notFound();
  }

  const toc = await getTableOfContents(project.body.raw);

  return (
    <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]'>
      {/* <div className='mx-auto w-full min-w-0'>
        <div className='mb-4 flex items-center space-x-1 text-sm text-muted-foreground'>
          <div className='overflow-hidden text-ellipsis whitespace-nowrap'>
            Projects
          </div>
          <ChevronRightIcon className='h-4 w-4' />
          <div className='font-medium text-foreground'>{project.title}</div>
        </div>
        <div className='space-y-2'>
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {project.title}
          </h1>

          {project.description && (
            <p className='text-lg text-muted-foreground'>
              <Balancer>{project.description}</Balancer>
            </p>
          )}
        </div>
        <div className='flex items-center space-x-2 pt-4'></div>
        {project.links ? (
          <div className='flex items-center space-x-2 pt-4'>
            {project.links?.project && (
              <Link
                href={project.links.project}
                target='_blank'
                rel='noreferrer'
                className={cn(buttonVariants({}), "gap-1")}
              >
                View Demo
                <ExternalLinkIcon className='h-3 w-3' />
              </Link>
            )}
            {project.links?.api && (
              <Link
                target='_blank'
                rel='noreferrer'
                href={siteConfig.links.github}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                <Icons.gitHub className='mr-2 h-4 w-4' />
                GitHub
              </Link>
            )}
          </div>
        ) : null}
        <div className='pb-12 pt-8'>
          <div className='mdx'>
            <Mdx code={project.body.code} />
          </div>
        </div>
        <ProjectsPager project={project} />
      </div> */}

      {
        // Table of content
        project.toc && (
          <div className='hidden text-sm xl:block'>
            <div className='sticky top-16 -mt-10 pt-4'>
              <ScrollArea className='pb-10'>
                <div className='sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12'>
                  <DashboardTableOfContents toc={toc} />
                </div>
              </ScrollArea>
            </div>
          </div>
        )
      }
    </main>
  );
}
