import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function UserProfile() {
  return (
    <div className="">
      <Avatar className="h-12 w-12 lg:block">
        <AvatarImage src="https://github.com/shadcn.png"  alt="User Avatar" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      {/* <div>
        <h2 className="text-lg font-semibold">User Name</h2>
        <p className="text-sm text-gray-500">user@example.com</p>
      </div> */}
    </div>
  );
}

export default UserProfile;