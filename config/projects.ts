import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface ProjectsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const projectsConfig: ProjectsConfig = {
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Github",
      href: "https://github.com/theBigBengi",
    },
  ],
  sidebarNav: [
    {
      title: "Projects",
      items: [
        {
          title: "thebigbengi",
          href: "/projects/thebigbengi",
          items: [],
        },
        {
          title: "quill",
          href: "/projects/quill",
          items: [],
        },
        {
          title: "the wild oasis",
          href: "/projects/the-wild-oasis",
          items: [],
        },
      ],
    },
  ],
};
