import Ripple from "@/components/ui/ripple"

export const ComingSoon = ()=>{
  return (
    <div className="min-h-screen h-full w-full flex flex-col items-center space-y-2">
    <Ripple className="h-full w-full">
      <div className="font-default text-2xl md:text-3xl">Coming Soon</div>
    </Ripple>
    </div>
  )
}