import { DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS, DEFAULT_TITLE, description, links, PRODUCTION_URL } from "./meta"

export type MetaData = {
  title: string,
  keywords: string,
  description: string,
  imageURL: string,
  canonicalURL?: string
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
    canonicalURL: PRODUCTION_URL + "/",
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
    keywords: "cgpa calculator, cgpa, vit cgpa calculator, cgpa calculator vit, instant cgpa, VIT, calculation, semester, vellore, vellore institute of technology, FAT, exams, class, project, lab, vitian, theory, j component",
    description: description.cgpa,
    canonicalURL: PRODUCTION_URL + links.cgpa
  },

  services: {
    title: "Services • VIT Buddy",
    description: "Explore our CGPA, GPA calculator, attendance and FFCS planner for seamless academic management and efficient course planning.",
    keywords: "vit, vellore, chennai, ap, bhopal, academics, cgpa, gpa, calculator, progress, student, college, attendance, ffcs, planner",
    imageURL: "/images/help.webp",
    canonicalURL: PRODUCTION_URL + "/services",
  },

  gpa: {
    title: "GPA Calculator • VIT Buddy",
    description: description.gpa,
    imageURL: "/images/gpa.webp",
    keywords: "gpa, gpa calculator vit, vit gpa calculator, gpa calculator, vit, grade vit, VIT, calculation, semester, vellore, vellore institute of technology, FAT, exams, class, project, lab, vitian, theory, j component",
    canonicalURL: PRODUCTION_URL + links.gpa
  },

  ffcs: {
    title: "FFCS Planner • VIT Buddy",
    imageURL: "/images/ffcs.webp",
    keywords: DEFAULT_KEYWORDS,
    description: description.ffcs,
    canonicalURL: PRODUCTION_URL + links.ffcs
  },

  attendance: {
    title: "Attendance Calculator • VIT Buddy",
    imageURL: "/images/attendance.webp",  
    keywords: DEFAULT_KEYWORDS,
    description: description.attendance,
    canonicalURL: PRODUCTION_URL + links.attendance
  }
} 