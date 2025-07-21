import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Compass,
  Upload,
  MessageCircle,
  User,
  Heart,
  Bookmark,
  Settings,
  Moon,
  Sun,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const mainItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Explore", url: "/explore", icon: Compass },
  { title: "Upload", url: "/upload", icon: Upload },
  { title: "Messages", url: "/messages", icon: MessageCircle },
  { title: "Profile", url: "/profile", icon: User },
];

const personalItems = [
  { title: "Liked Posts", url: "/liked", icon: Heart },
  { title: "Saved Posts", url: "/saved", icon: Bookmark },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const isCollapsed = state === "collapsed";

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const getNavClassName = (isActive: boolean) =>
    `w-full justify-start transition-all duration-200 ${
      isActive
        ? "bg-gradient-primary text-primary-foreground shadow-soft"
        : "hover:bg-muted/50 hover:scale-105"
    }`;

  return (
    <Sidebar className="border-r border-border/50 bg-card/50 backdrop-blur-sm">
      <SidebarContent className="p-4">
        {/* Logo */}
        <div className="mb-8 px-2">
          {!isCollapsed ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SkillSync
              </h1>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end>
                      {({ isActive }) => (
                        <Button
                          variant="ghost"
                          className={getNavClassName(isActive)}
                          title={isCollapsed ? item.title : undefined}
                        >
                          <item.icon className="h-5 w-5" />
                          {!isCollapsed && <span>{item.title}</span>}
                        </Button>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Personal Section */}
        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Personal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {personalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      {({ isActive }) => (
                        <Button
                          variant="ghost"
                          className={getNavClassName(isActive)}
                          title={isCollapsed ? item.title : undefined}
                        >
                          <item.icon className="h-5 w-5" />
                          {!isCollapsed && <span>{item.title}</span>}
                        </Button>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Theme Toggle */}
        <div className="mt-auto pt-8">
          <Button
            variant="ghost"
            onClick={toggleTheme}
            className="w-full justify-start hover:bg-muted/50"
            title={isCollapsed ? "Toggle theme" : undefined}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            {!isCollapsed && <span>{isDark ? "Light Mode" : "Dark Mode"}</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}