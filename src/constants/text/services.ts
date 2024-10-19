import { attendance, cgpa, ffcs, gpa } from "@/assets/images"
import { description, links } from "../meta"

type Service = {
  title: string,
  description: string,
  imageURL: string,
  link: string
  status?: string
}

export const services: Service[] = [
  { title: "GPA Calculator", description: description.gpa, imageURL: gpa, link: links.gpa },
  { title: "CGPA Calculator", description: description.cgpa, imageURL: cgpa, link: links.cgpa },
  { title: "FFCS Planner", description: description.ffcs, imageURL: ffcs, link: links.ffcs, status: "Coming Soon" },
  { title: "Attendance Calculator", description: description.attendance, imageURL: attendance, link: links.attendance, status: "Coming Soon" },
]