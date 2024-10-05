import RetroGrid from "@/components/ui/retro-grid"
import { useEffect } from "react"
import { toast } from "sonner"

export const Home = ()=>{
  useEffect(()=>{
    toast.success("Welcome")
  }, [])
  return (
    <div className="min-h-full w-full flex flex-col">
      <RetroGrid className="fixed z-0" />
    </div>
  )
}
