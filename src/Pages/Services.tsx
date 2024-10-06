import { useMediaQuery } from "usehooks-ts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { description } from "@/constants/text/services"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import { attendance, cgpa, ffcs, gpa } from "@/assets/images"

type Service = {
  title: string,
  description: string,
  imageURL: string,
  link: string
  status?: string
}

const services: Service[] = [
  { title: "GPA Calculator", description: description.gpa, imageURL: gpa, link: "/services/gpa" },
  { title: "CGPA Calculator", description: description.cgpa, imageURL: cgpa, link: "/services/cgpa", status: "Coming Soon" },
  { title: "FFCS Planner", description: description.ffcs, imageURL: ffcs, link: "/services/ffcs-planner", status: "Coming Soon" },
  { title: "Attendance Calculator", description: description.attendance, imageURL: attendance, link: "/services/attendance", status: "Coming Soon" },
]

export const Services = ()=>{
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="min-h-full w-full flex flex-col items-center">
      <div className="max-w-4xl space-y-5 px-5 pt-2">
        {services.map((service, index)=>(
          <Card className="h-full w-full pt-4 bg-primary-foreground" key={index}>
            <Link to={service.link}>
              <CardContent className={cn("flex max-sm:px-0 px-1 md:px-2 space-y-2", isMobile ? "flex-col justify-center" : "items-center")}>
                <div className={cn("w-full flex justify-center")}><img src={service.imageURL} alt="service" className="size-44 max-sm:size-20" /></div>
                <CardHeader>
                  <div className={"flex justify-between"}>
                    <CardTitle className={cn("md:text-4xl sm:text-3xl text-2xl font-poppins", isMobile && "text-center")}>{service.title}</CardTitle>
                    { service.status && <div className={cn("border rounded-full text-sm w-fit px-4 flex items-center", isMobile && "hidden")}><AnimatedShinyText>{service.status}</AnimatedShinyText></div>}
                  </div>
                  <CardDescription className="flex flex-col">
                    <div className={cn("font-default md:text-2xl text-xl tracking-wide text-pretty", isMobile && "text-wrap")}>{service.description}</div>
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