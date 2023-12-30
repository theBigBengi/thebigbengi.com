import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='relative flex min-h-screen flex-col   bg-gradient-to-tl from-zinc-50/0 via-zinc-50 to-zinc-50/0 dark:bg-gradient-to-tl dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0'>
      <SiteHeader />
      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </div>
  );
}
