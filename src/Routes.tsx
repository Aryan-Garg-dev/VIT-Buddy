/* eslint-disable react-refresh/only-export-components */
import { Route } from "react-router-dom"
import { lazy } from "react"
import { Loading } from "./Pages/Loading"
import { SEOContent } from "./constants/SEOContent"
import { HomeLayout } from "./Layout/HomeLayout"
// import { Home } from "./Pages/Home"
import { BaseLayout } from "./Layout/BaseLayout"

const ComingSoon = lazy(()=>import("./Pages/ComingSoon").then(module=>({ default: module.ComingSoon })))
const NotFound = lazy(()=>import("./Pages/NotFound").then(module=>({ default: module.NotFound })))
const GPACalculator = lazy(()=>import("./Pages/GPACalculator").then(module=>({ default: module.GPACalculator })))
const Services = lazy(()=>import("./Pages/Services").then(module=>({ default: module.Services })))

type Route = {
  path: string,
  element?: React.ReactNode
}

export const routes: Route[] = [
  { path: "/", element: <HomeLayout meta={SEOContent.home}><Services /></HomeLayout> },
  { path: "/services", element: <HomeLayout meta={SEOContent.services}><Services /></HomeLayout> },
  { path: "/services/cgpa", element: <BaseLayout meta={SEOContent.cgpa}><ComingSoon /></BaseLayout> },
  { path: "/services/ffcs-planner", element: <BaseLayout meta={SEOContent.ffcs}><ComingSoon /></BaseLayout> },
  { path: "/services/gpa", element: <BaseLayout meta={SEOContent.gpa}><GPACalculator /></BaseLayout> },
  { path: "/services/attendance", element: <BaseLayout meta={SEOContent.attendance}><ComingSoon /></BaseLayout> },
  { path: "/test", element: <BaseLayout meta={SEOContent.loading}><Loading /></BaseLayout> },
  { path: "*", element: <BaseLayout meta={SEOContent.notFound}><NotFound /></BaseLayout> },
]

export const renderRoutes = (routes: Route[])=>{
  return routes.map((route, index)=>{
    if (route.element){
      return <Route key={index} path={route.path} element={route.element} />
    }
    return null;
  })
}