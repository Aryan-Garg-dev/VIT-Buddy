import { MetaData } from "@/constants/SEOContent"
import { Helmet } from "react-helmet-async"

export const SEO = ({ 
  title,
  description,
  keywords,
  imageURL,
  canonicalURL
}: MetaData)=>{
  {console.log(imageURL)}
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" type="image/webp" href={imageURL} />
      {canonicalURL && <link rel="canonical" href={canonicalURL} />}
    </Helmet>
  )
}