import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] pb-[--header-height]"
      variant="inset"
      {...props}
    >
      <SidebarHeader>
        <div>Python Basics</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup title="Group 1"></SidebarGroup>
        <SidebarGroup title="Group 2"></SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div>Footer</div>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
    </Sidebar>
  );
}
