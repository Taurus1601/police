import {
  Calendar,
  Home,
  Inbox,
  LucideBinoculars,
  Phone,
  Search,
  Settings,
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
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Phone Number",
    url: "#",
    icon: Phone,
  },
  {
    title: "CAF",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Aadhar Number",
    url: "#",
    icon: LucideBinoculars,
  },
  {
    title: "Feature2",
    url: "#",
    icon: Search,
  },
  {
    title: "feature3",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar({ componentData }) {
  const handleClick = (e) => {
    console.log("clicked");
    componentData(e.target.innerText);
  };
  return (
    <Sidebar>
       <div className="h-[50] w-[100%] bg-[#333] text-white text-center">
      
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span onClick={handleClick} className="text-xl">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
