import { Navbar } from "@/components/Navbar"
import { SEO } from "@/components/SEO"
import { MetaData } from "@/constants/SEOContent"

interface BaseLayoutProps {
  children: React.ReactNode,
  meta: MetaData
}

export const HomeLayout = ({ children, meta }: BaseLayoutProps)=>{
  return (
    <div className="h-full">
      <SEO {...meta} />
      <Navbar transparent />
      <main className="h-full pt-16">
        {children}
      </main>
    </div>
  )
}
