import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface ProjectsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const projectsConfig: ProjectsConfig = {
  mainNav: [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
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
