import { Navbar } from "@/components/Navbar"
import { SEO } from "@/components/SEO"
import { MetaData } from "@/constants/SEOContent"

interface BaseLayoutProps {
  children: React.ReactNode,
  meta?: MetaData
}

export const BaseLayout = ({ children, meta }: BaseLayoutProps)=>{
  return (
    <div className="h-full min-h-screen">
      <SEO {...meta} />
      <Navbar />
      <main className="h-screen pt-16">
        {children}
      </main>
    </div>
  )
}
