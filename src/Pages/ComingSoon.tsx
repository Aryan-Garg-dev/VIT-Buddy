import Ripple from "@/components/ui/ripple"
import { useDisableZoomAndScroll } from "@/hooks/useDisableZoomAndScroll";
import { useIsMobile } from '@/hooks/useIsMobile';

export const ComingSoon = ()=>{
  useDisableZoomAndScroll();

  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen h-full w-full flex flex-col items-center space-y-2">
    <Ripple 
      className="h-full w-full" 
      mainCircleSize={!isMobile ? 280 : 210 }
      numCircles={!isMobile ? 10 : 8}
    >
      <div className="font-cursive text-2xl md:text-3xl lg:text-4xl">{"Coming Soon... "}</div>
    </Ripple>
    </div>
  )
}