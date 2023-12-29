import Link from "next/link";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-white via-zinc-300/20 to-white dark:from-black dark:via-zinc-600/20 dark:to-black'>
      <nav className='my-16 animate-fade-in'>
        <ul className='flex items-center justify-center gap-4'>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm duration-500 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />

      <h1 className='z-10 text-4xl text-transparent duration-1000 bg-black dark:bg-white cursor-default text-edge-outline animate-title font-sans font-extrabold sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text '>
        thebigbengi
      </h1>

      <div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <div className='my-16 text-center animate-fade-in'>
        <h2 className='text-sm text-zinc-500 '>
          Im building{" "}
          <Link
            target='_blank'
            href='https://unkey.dev'
            className='underline duration-500 hover:text-zinc-300'
          >
            unkey.dev
          </Link>{" "}
          to solve API authentication and authorization for developers.
        </h2>
      </div>
    </div>
  );
}
