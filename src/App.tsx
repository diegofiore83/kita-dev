import { CSSProperties, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const HEADER_HEIGHT = "4rem";

function App() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div
        style={
          {
            "--header-height": HEADER_HEIGHT,
          } as CSSProperties
        }
      >
        <header className="sticky top-0 bg-sidebar flex h-[--header-height] shrink-0 items-center gap-2 border-b px-4 isolate z-20">
          <div className="flex items-center justify-between gap-2 w-full">
            <Button
              className="flex"
              variant="ghost"
              size="icon"
              onClick={() => setOpen(!open)}
            >
              <img
                className="p-2"
                src="https://getkita.com/favicon.ico"
                alt="Kite"
              />
            </Button>

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <SidebarProvider open={open} onOpenChange={setOpen}>
          <AppSidebar />
          <SidebarInset>
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel className="min-h-[100vh] p-4">
                Files
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel className="min-h-[100vh] p-4">
                Editor
              </ResizablePanel>
            </ResizablePanelGroup>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
