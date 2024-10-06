import { DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS, DEFAULT_LOGO, DEFAULT_SOCIAL_IMG_URL, DEFAULT_TITLE } from "@/constants/meta"
import { MetaData } from "@/constants/SEOContent"
import { Helmet } from "react-helmet-async"

export const SEO = ({ 
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION, 
  keywords = DEFAULT_KEYWORDS,
  imageURL = DEFAULT_LOGO,
  socialURL,
  socialImgURL = DEFAULT_SOCIAL_IMG_URL,
  socialTitle = DEFAULT_TITLE,
  socialDescription = DEFAULT_DESCRIPTION
}: MetaData)=>{
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index,follow" />
      <link rel="icon" type="image/webp" href={imageURL} />
      {socialURL && <link rel="canonical" href={socialURL} />}

      {/* Social Meta Tags */}
      <meta property="og:title" content={socialTitle} />
      { socialURL && <meta property="og:description" content={socialDescription} />}
      <meta property="og:image" content={socialImgURL} />
      <meta property="og:url" content={socialURL} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={"VIT Buddy"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image" content={socialImgURL} />
    </Helmet>
  )
}