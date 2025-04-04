import Logo from "@/components/logo";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ArrowRight2 } from "iconsax-react"
import ProfileUser from '../../components/profile-user';

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default async function TodoLayout({ children}) {


  return (
    <html lang="en">
      <body className="text-charcoal bg-slate-200">
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <nav className="w-full h-[80px] flex justify-between items-center px-14">
              {/* <SidebarTrigger /> */}
              <ul className="flex gap-4">
                <a href="/todo/workspace">
                  <li>Workspace</li>
                </a>
                <span>
                  <ArrowRight2 size="20" color="#1e293b"/>
                </span>
                <a href="/todo/workspace/1">
                  <li className="underline underline-offset-8 text-blue-500">HRD Design</li>
                </a>
              </ul>
              <ProfileUser />
            </nav>
            <hr className="border-black/20" />
            {children}
          </main>
        </SidebarProvider>
      </body>

    </html>
  );
}
