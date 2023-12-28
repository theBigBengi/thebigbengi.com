import Link from "next/link";
import React from "react";
// import { allProjects } from "contentlayer/generated";
import Balance from "react-wrap-balancer";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import { Card } from "@/components/card";
import { Article } from "./article";

const redis = Redis.fromEnv();

export const allProjects = [
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

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":"))
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "unkey")!;
  const top2 = allProjects.find((project) => project.slug === "planetfall")!;
  const top3 = allProjects.find((project) => project.slug === "highstorm")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className='container relative'>
      {/* <Navigation /> */}
      <div className='pt-20  space-y-8  md:space-y-16 md:pt-24 lg:pt-32'>
        <div className='text-center mx-auto lg:mx-0'>
          <h2 className='  md:text-6xl font-bold tracking-tight text-zinc-100 text-4xl'>
            Projects
          </h2>
          <Balance className='max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl'>
            <p className='mt-4 text-zinc-400'>
              Some of the projects are from work and some are on my own time.
            </p>
          </Balance>
        </div>
        <div className='w-full h-px bg-zinc-800' />

        <div className='grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 '>
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className='relative w-full h-full p-4 md:p-8'>
                <div className='flex items-center justify-between gap-2'>
                  <div className='text-xs text-zinc-100'>
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className='flex items-center gap-1 text-xs text-zinc-500'>
                    <Eye className='w-4 h-4' />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0
                    )}
                  </span>
                </div>

                <h2
                  id='featured-post'
                  className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'
                >
                  {featured.title}
                </h2>
                <p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
                  {featured.description}
                </p>
                <div className='absolute bottom-4 md:bottom-8'>
                  <p className='hidden text-zinc-200 hover:text-zinc-50 lg:block'>
                    Read more <span aria-hidden='true'>&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className='flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 '>
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
        <div className='hidden w-full h-px md:block bg-zinc-800' />

        <div className='grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3'>
          <div className='grid grid-cols-1 gap-4'>
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className='grid grid-cols-1 gap-4'>
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className='grid grid-cols-1 gap-4'>
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
