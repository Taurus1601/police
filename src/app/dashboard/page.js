"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";
import React, { useState } from "react";
import AvatarPop from "@/components/avatarPop";
import Main from "./Main";
import Details from "@/components/Details";

export default function Page({ children }) {
  const [dataFromChild, setDataFromChild] = useState("");
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div className="  ">
      <div className="text-white flex flex-row justify-center h-[20vh] text-center relative  bg-blue-500">
        <div className="bg-gray-400 w-1/3">Logo</div>
        <AvatarPop/>
      </div>
      <SidebarProvider>
        <AppSidebar componentData={handleDataFromChild} />
        <main>
          <SidebarTrigger />
          <div className="flex flex-col gap-20 flex-jusitfy-center relative top-[25vh] left-[8vw]">
            <Main ></Main>
            <Details></Details>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}