'use client';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [dataFromChild, setDataFromChild] = useState("");
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <>
   
<SidebarProvider>
  <AppSidebar componentData={handleDataFromChild} />
  <main>
    <SidebarTrigger/>
    {dataFromChild}
    {children}
  </main>
</SidebarProvider></>
  );
}
