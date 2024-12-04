import { MoreHorizontal, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface IconTemplateProps {
  image: string;
  fallback: string;
}

const iconTemplate = ({ image, fallback }: IconTemplateProps) => (
  <Avatar className="h-6 w-6">
    <AvatarImage src={image} />
    <AvatarFallback>{fallback}</AvatarFallback>
  </Avatar>
);

const users = [
  {
    title: "Mr Stevens",
    icon: iconTemplate({
      image: "https://github.com/shadcn.png",
      fallback: "ST",
    }),
    isTeacher: true,
  },
  {
    title: "Jenny K",
    icon: iconTemplate({
      image: "https://avatars.githubusercontent.com/u/45203963?s=64&v=4",
      fallback: "JK",
    }),
    isTeacher: false,
  },
  {
    title: "Sebastian",
    icon: iconTemplate({
      image: "https://avatars.githubusercontent.com/u/2776142?s=64&v=4",
      fallback: "SB",
    }),
    isTeacher: false,
  },
  {
    title: "Adele Jasper",
    icon: iconTemplate({
      image: "https://avatars.githubusercontent.com/u/201615?s=64&v=4",
      fallback: "AJ",
    }),
    isTeacher: false,
  },
  {
    title: "Malik",
    icon: iconTemplate({
      image: "https://avatars.githubusercontent.com/u/17162626?s=64&v=4",
      fallback: "MK",
    }),
    isTeacher: false,
  },
  {
    title: "Nikhil",
    icon: iconTemplate({
      image: "https://avatars.githubusercontent.com/u/38808827?s=64&v=4",
      fallback: "NJ",
    }),
    isTeacher: false,
  },
];

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
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                People
                <Badge variant="outline" className="p-0 py-1 pr-2">
                  <Users className="h-3" />
                  <span>6</span>
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <SidebarMenu>
                {users.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        {item.icon}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    {item.isTeacher && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <SidebarMenuAction>
                            <MoreHorizontal />
                          </SidebarMenuAction>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" align="start">
                          <DropdownMenuItem>
                            <span>Edit Lesson</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Delete Lesson</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SidebarFooter>
    </Sidebar>
  );
}
