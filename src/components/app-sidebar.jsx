import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import Logo from "@/components/logo";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarFooter,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { LogoutCurve, AddSquare, More, Star1 } from 'iconsax-react';
import AddEditWorkspace from './add-edit-workspace';
import { getAllWorkspacesAction } from '../../actions/workspace-actions/workspace-actions';

export async function AppSidebar() {

  const colors = [
    "bg-red-500", 
    "bg-blue-500", 
    "bg-green-500", 
    "bg-yellow-500", 
    "bg-purple-500", 
    "bg-pink-500", 
    "bg-indigo-500", 
    "bg-teal-500",
    "bg-orange-500"
  ];
  
  const workspaces = await getAllWorkspacesAction( 
      0, 
      5, 
      "workspaceId", 
      "ASC");
      console.log("workspaces:", workspaces);

  return (
    <Sidebar>
      <SidebarContent className="mt-[80px]">
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="w-full flex justify-center">
              <Logo />
            </div>
            <SidebarMenu>

              <AddEditWorkspace datatype="add" />

              {
                workspaces?.map((workspace, index) => {
                  const randomColor = colors[Math.floor(Math.random() * colors.length)];
                  return (
                <SidebarMenuItem key={workspace.workspaceId}>
                  <SidebarMenuButton asChild>
                    <a href={`/todo/${workspace.workspaceId}?q=workspace`}
                      className="flex justify-between px-4" >
                      <div className="flex gap-4 items-center">
                        <div className={`w-2 h-2 rounded-full ${randomColor}`}></div>
                        <span>{workspace.workspaceName}</span>
                      </div>
                      <More size="20" color="var(--charcoal)"/>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                )
              })}

                <div className="flex justify-between px-4 pt-10">
                  <h3 className="text-[var(--light-steel-blue)] text-lg font-semibold pb-2">Favorite</h3>
                  <Star1 size="22" color="var(--light-steel-blue)" />
                </div>

                {
                  workspaces?.map((workspace, index) => {
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];

                    if (workspace.isFavorite) {
                      return (
                        <SidebarMenuItem key={workspace.workspaceId}>
                          <SidebarMenuButton asChild>
                            <a href={`/todo/${workspace.workspaceId}?q=workspace`} className="flex justify-between px-4">
                              <div className="flex gap-4 items-center">
                                <div className={`w-2 h-2 rounded-full ${randomColor}`}></div>
                                <span>{workspace.workspaceName}</span>
                              </div>
                              <More size="20" color="var(--charcoal)" />
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    }
                  })}

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-28">
        <div className="flex gap-2 items-center">
          <LogoutCurve size="20" color="var(--persian-green)"/>
          <span className="text-[var(--persian-green)] font-bold">Log out</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
