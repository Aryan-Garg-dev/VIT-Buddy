/* eslint-disable react-refresh/only-export-components */
import { Route } from "react-router-dom"
import { lazy } from "react"
import { Loading } from "./Pages/Loading"
import { SEOContent } from "./constants/SEOContent"
import { HomeLayout } from "./Layout/HomeLayout"
import { Home } from "./Pages/Home"
import { BaseLayout } from "./Layout/BaseLayout"

const ComingSoon = lazy(()=>import("./Pages/ComingSoon").then(module=>({ default: module.ComingSoon })))
const NotFound = lazy(()=>import("./Pages/NotFound").then(module=>({ default: module.NotFound })))
const GPACalculator = lazy(()=>import("./Pages/GPACalculator").then(module=>({ default: module.GPACalculator })))

type Route = {
  path: string,
  element?: React.ReactNode
  children?: Route[]
}

export const routes: Route[] = [
  { path: "/", element: <HomeLayout meta={SEOContent.home}><Home /></HomeLayout> },
  { path: "/services", children: [
    { path: "/cgpa", element: <BaseLayout meta={SEOContent.cgpa}><ComingSoon /></BaseLayout> },
    { path: "/ffcs-planner", element: <BaseLayout meta={SEOContent.ffcs}><ComingSoon /></BaseLayout> },
    { path: "/gpa", element: <BaseLayout meta={SEOContent.gpa}><GPACalculator /></BaseLayout> },
    { path: "/attendance", element: <BaseLayout meta={SEOContent.attendance}><ComingSoon /></BaseLayout> },
  ] },
  { path: "/test", element: <BaseLayout><Loading /></BaseLayout> },
  { path: "*", element: <BaseLayout meta={SEOContent.notFound}><NotFound /></BaseLayout> },
]

export const renderRoutes = (routes: Route[], basePath = "")=>{
  return routes.map((route, index)=>{
    const fullPath = `${basePath}${route.path}`;
    if (route.children){
      return (
        <Route key={index} path={fullPath} element={route.element || null}>
          {renderRoutes(route.children, `${fullPath}`)} 
        </Route>
      )
    }
    if (route.element){
      return <Route key={index} path={fullPath} element={route.element} />
    }
    return null;
  })
}