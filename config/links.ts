import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface LinksConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const linksConfig: LinksConfig = {
  mainNav: [
    {
      title: "projects",
      href: "/projects",
    },
    {
      title: "contact",
      href: "/contact",
    },
  ],
  sidebarNav: [
    {
      title: "",
      items: [],
    },
  ],
};
