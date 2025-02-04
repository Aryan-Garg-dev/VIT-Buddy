import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import { useIsMobile } from "@/hooks/useIsMobile"
import { services } from "@/constants/text/services"
import { scrollIntoView } from "@/lib/scroll"

const cardScroll = (e: React.MouseEvent) => scrollIntoView(e, 50);

export const Services = ()=>{
  const isMobile = useIsMobile();
  return (
    <div className="min-h-full w-full flex flex-col items-center">
      {/* <div className="hidden lg:dark:block"><Meteors number={30} /></div> */}
      <div className="max-w-4xl space-y-6 md:px-5 px-4 pt-2 pb-5 md:mx-5">
        {services.map((service, index)=>(
          <Card className="h-full w-full select-none pt-4 bg-primary-foreground transform transition duration-150 md:hover:scale-105 active:scale-95 active:shadow-sm md:hover:dark:shadow-2xl md:hover:shadow-xl dark:shadow-neutral-900 bg-gradient-to-tr md:bg-gradient-to-br dark:from-neutral-800 md:dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 from-gray-200 to-neutral-50 group shadow-lg" key={index}
          onMouseEnter={cardScroll}
          >
            <Link to={service.link}>
              <CardContent className={cn("flex max-sm:px-0 px-1 md:px-2 space-y-2", isMobile ? "flex-col justify-center" : "items-center")}>
                <div className={cn("w-full flex justify-center select-none")}><img src={service.imageURL} alt="service" className="size-44 max-sm:size-20" /></div>
                <CardHeader>
                  <div className={cn("flex justify-between")}>
                    <CardTitle className={cn("md:text-4xl sm:text-3xl text-2xl font-poppins group-hover:animate-gradient")}>{service.title}</CardTitle>
                    { service.status && <div className={cn("bg-background border rounded-full text-sm w-fit max-h-10 px-4 flex items-center text-nowrap", isMobile && "hidden")}><AnimatedShinyText>{service.status}</AnimatedShinyText></div>}
                  </div>
                  <CardDescription className="flex flex-col">
                    <div className={cn("font-josephinBold text-2xl max-sm:text-xl text-pretty", isMobile && "text-balance")}>{service.description}</div>
                  </CardDescription>
                </CardHeader>
              </CardContent>
            </Link>
          </Card>
          ))}
      </div>
    </div>
  )
}