import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UserProfile from "./avatar";

export default function AvatarPop() {
  const userName = "User Name";

  return (
    <div className="absolute top-10 right-10">
      <Popover>
        <PopoverTrigger>
          <UserProfile />
        </PopoverTrigger>
        <PopoverContent className="w-[10vw] mr-3">
          <div>
            <h2 className="text-lg font-semibold text-center">{userName}</h2>
            <span
              icon="settings"
              className="text-sm text-gray-500 text-center"
              onClick={() => console.log("Settings")}
            >
              Settings
            </span>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
