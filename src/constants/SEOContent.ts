import { DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS, DEFAULT_TITLE, PRODUCTION_URL } from "./meta"

export type MetaData = Partial<{
  title: string,
  keywords: string,
  description: string,
  imageURL: string,

  socialURL: string,
  socialImgURL: string,
  socialTitle: string,
  socialDescription: string,
}>

export type PageMetaData = {
  [key: string]: MetaData 
}

export const SEOContent: PageMetaData  = {
  home: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    imageURL: "/images/hack.webp",

    socialImgURL: PRODUCTION_URL + "/images/large/hack.webp",
    // socialURL: PRODUCTION_URL,
    socialTitle: DEFAULT_TITLE,
    socialDescription: "Streamline your academic journey with VIT Buddy. Plan your FFCS, calculate your CGPA, and track attendance effortlessly. Perfect for VIT students!"
  },

  notFound: {
    title: "Page not found • VIT Buddy",
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    imageURL: "/images/hack.webp",

    socialImgURL: PRODUCTION_URL + "/images/large/hack.webp",
    socialTitle: "Page not found • VIT Buddy"
  },

  cgpa: {
    title: "CGPA Calculator • VIT Buddy",
    imageURL: "/images/cgpa.webp",

    socialImgURL: PRODUCTION_URL + "/images/large/cgpa.webp",
    // socialURL: PRODUCTION_URL + "/services/cgpa",
    socialTitle: "CGPA Calculator • VIT Buddy",
  },

  gpa: {
    title: "GPA Calculator • VIT Buddy",
    description: "Easily calculate your GPA with our user-friendly GPA calculator. Track your academic performance, manage your grades, and stay on top of your progress. Perfect for students aiming for success.",
    imageURL: "/images/gpa.webp",
    keywords: "gpa, vit, vellore, chennai, ap, bangalore, cgpa, calculator, acadmemic, progress, students, success",

    socialImgURL: PRODUCTION_URL + "/images/large/gpa.webp",
    // socialURL: PRODUCTION_URL + "/services/gpa",
    socialDescription: "Use our easy-to-use GPA calculator to calculate your GPA, manage your grades, and monitor your academic progress. Stay on track towards your goals!",
    socialTitle: "GPA Calculator • VIT Buddy"
  },

  ffcs: {
    title: "FFCS Planner • VIT Buddy",
    imageURL: "/images/ffcs.webp",

    socialImgURL: PRODUCTION_URL + "/images/large/ffcs.webp",
    // socialURL: PRODUCTION_URL + "/services/ffcs-planner",
    socialTitle: "FFCS Planner • VIT Buddy"
  },

  attendance: {
    title: "Attendance Calculator • VIT Buddy",
    imageURL: "/images/attendance.webp",

    socialImgURL: PRODUCTION_URL + "/images/large/attendance.webp",
    // socialURL: PRODUCTION_URL + "/services/attendance",
    socialTitle: "Attendance Calculator • VIT Buddy"
    
  }
} 