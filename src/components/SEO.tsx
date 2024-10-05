import { DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS, DEFAULT_LOGO, DEFAULT_TITLE } from "@/constants/meta"
import { MetaData } from "@/constants/SEOContent"
import { Helmet } from "react-helmet-async"

export const SEO = ({ 
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION, 
  keywords = DEFAULT_KEYWORDS,
  imageURL = DEFAULT_LOGO
}: MetaData)=>{
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index,follow" />
      <link rel="icon" type="image/webp" href={imageURL} />
    </Helmet>
  )
}