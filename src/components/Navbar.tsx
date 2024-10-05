import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";

export const Navbar = ({ transparent = false }: { transparent?: boolean })=>{
  const scrolled = useScrollTop();
  return (
    <div className={cn("z-50 bg-background fixed top-0 w-screen flex items-center justify-between px-5 py-2 font-fancy select-none text-4xl", scrolled && "border-b shadow-sm", !transparent && "bg-primary-foreground")}>
      <Link to={"/"} className={cn(transparent && `dark:text-transparent bg-clip-text bg-gradient-to-r 
        dark:from-[#257180] dark:via-[#F2E5BF] dark:to-[#FD8B51]
        from-[#000000] via-[#1E3E62] to-[#FF6500]
      `)}>VIT Buddy</Link>
      <ModeToggle />
    </div>
  )
}