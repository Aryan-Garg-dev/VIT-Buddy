import { DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS, DEFAULT_TITLE } from "./meta"

export type MetaData = Partial<{
  title: string,
  keywords: string,
  description: string,
  imageURL: string
}>

export type PageMetaData = {
  [key: string]: MetaData 
}

export const SEOContent: PageMetaData  = {
  home: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS
  },
  notFound: {
    title: "Page not found • VIT Buddy",
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    imageURL: "/images/hack.webp"
  },
  cgpa: {
    title: "CGPA Calculator • VIT Buddy",
    imageURL: "/images/cgpa.webp"
  },
  gpa: {
    title: "GPA Calculator • VIT Buddy",
    imageURL: "/images/gpa.webp"
  },
  ffcs: {
    title: "FFCS Planner • VIT Buddy",
    imageURL: "/images/ffcs.webp"
  },
  attendance: {
    title: "Attendance Calculator • VIT Buddy",
    imageURL: "/images/attendance.webp"
  }
} 