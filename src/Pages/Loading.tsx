import { hack } from "@/assets/images"
import { Logo } from "@/components/Logo"
import { Spinner } from "@/components/Spinner"
import Ripple from "@/components/ui/ripple"

export const Loading = ()=>{
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center space-y-2">
      <Ripple className="h-full w-full">
        <div className="p-5 rounded-3xl flex flex-col justify-center items-center">
          <div className="animate-pulse mb-2"><Logo src={hack} size={"medium"} /></div>
          <div className="flex justify-center items-center gap-3">
            <Spinner size={"lg"} />
            <span className="font-regular text-2xl md:text-3xl">Loading</span>
          </div>
        </div>
      </Ripple>
    </div>
  )
}