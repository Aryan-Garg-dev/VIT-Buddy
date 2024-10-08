import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import { useIsMobile } from "@/hooks/useIsMobile"
import { services } from "@/constants/text/services"


export const Services = ()=>{
  const isMobile = useIsMobile();
  return (
    <div className="min-h-full w-full flex flex-col items-center">
      <div className="max-w-4xl space-y-5 px-5 pt-2">
        {services.map((service, index)=>(
          <Card className="h-full w-full pt-4 bg-primary-foreground" key={index}>
            <Link to={service.link}>
              <CardContent className={cn("flex max-sm:px-0 px-1 md:px-2 space-y-2", isMobile ? "flex-col justify-center" : "items-center")}>
                <div className={cn("w-full flex justify-center")}><img src={service.imageURL} alt="service" className="size-44 max-sm:size-20" /></div>
                <CardHeader>
                  <div className={cn("flex justify-between")}>
                    <CardTitle className={cn("md:text-4xl sm:text-3xl text-2xl font-poppins")}>{service.title}</CardTitle>
                    { service.status && <div className={cn("border rounded-full text-sm w-fit px-4 flex items-center", isMobile && "hidden")}><AnimatedShinyText>{service.status}</AnimatedShinyText></div>}
                  </div>
                  <CardDescription className="flex flex-col">
                    <div className={cn("font-default font-[570] text-2xl max-sm:text-xl text-pretty", isMobile && "text-balance")}>{service.description}</div>
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