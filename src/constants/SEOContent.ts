import { DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS, DEFAULT_TITLE } from "./meta"

export type MetaData = {
  title: string,
  keywords: string,
  description: string,
  imageURL: string,
}

export type PageMetaData = {
  [key: string]: MetaData 
}

export const SEOContent: PageMetaData  = {
  home: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    imageURL: "/images/help.webp",
  },

  loading: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    imageURL: "",
  },

  notFound: {
    title: "Page not found • VIT Buddy",
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    imageURL: "/images/hack.webp",
  },

  cgpa: {
    title: "CGPA Calculator • VIT Buddy",
    imageURL: "/images/cgpa.webp",
    keywords: DEFAULT_KEYWORDS,
    description: DEFAULT_DESCRIPTION
  },

  gpa: {
    title: "GPA Calculator • VIT Buddy",
    description: "Easily calculate your GPA with our user-friendly GPA calculator. Track your academic performance, manage your grades, and stay on top of your progress. Perfect for students aiming for success.",
    imageURL: "/images/gpa.webp",
    keywords: "gpa, vit, vellore, chennai, ap, bangalore, cgpa, calculator, acadmemic, progress, students, success",
  },

  ffcs: {
    title: "FFCS Planner • VIT Buddy",
    imageURL: "/images/ffcs.webp",
    keywords: DEFAULT_KEYWORDS,
    description: DEFAULT_DESCRIPTION
  },

  attendance: {
    title: "Attendance Calculator • VIT Buddy",
    imageURL: "/images/attendance.webp",  
    keywords: DEFAULT_KEYWORDS,
    description: DEFAULT_DESCRIPTION
  }
} 