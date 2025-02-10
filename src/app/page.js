import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
   <div className="container flex flex-col items-center justify-center  ">
    <Button>
    <Link href="/dashboard">Home</Link>
    </Button>
   </div>
    </>
  )
}
