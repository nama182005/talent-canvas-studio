import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Bell, Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Top Navigation Bar */}
          <header className="h-16 border-b border-border/50 bg-card/80 backdrop-blur-sm px-6 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="lg:hidden" />
              
              {/* Search Bar */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search skills, creators, posts..."
                  className="pl-10 w-64 bg-background/50 border-border/50"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Upload Button */}
              <Button 
                size="sm" 
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-soft"
              >
                <Plus className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Upload</span>
              </Button>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full"></span>
              </Button>

              {/* Profile Avatar */}
              <Avatar className="h-8 w-8 ring-2 ring-primary/20 cursor-pointer">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-sm">
                  AR
                </AvatarFallback>
              </Avatar>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}