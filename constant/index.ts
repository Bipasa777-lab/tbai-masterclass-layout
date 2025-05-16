export type CourseCardType = {
  id: string
  status: "Active" | "Scheduled" | "Cancelled"
  title: string
  rating: number
  sessions: number
  duration: string
  category: string
  image: string
}

export const cardData: CourseCardType[] = [
  {
    id: "1",
    status: "Active",
    title: "Fundamentals of AI : ChatGPT, CanvaAI, Dall-E Mastery",
    rating: 5,
    sessions: 27,
    duration: "30:00 Hours",
    category: "AI Fundamentals",
    image: "https://wallpaperaccess.com/full/5654215.png"
  },
  {
    id: "2",
    status: "Scheduled",
    title: "Legal Tech Essentials: AI & Automation in Law",
    rating: 4,
    sessions: 20,
    duration: "24:00 Hours",
    category: "Legal Tech",
    image: "https://wallpaperaccess.com/full/5654215.png"
  },
  {
    id: "3",
    status: "Cancelled",
    title: "Intro to Cloud Computing: AWS, Azure, GCP",
    rating: 4,
    sessions: 18,
    duration: "20:00 Hours",
    category: "Cloud Computing",
    image: "https://wallpaperaccess.com/full/5654215.png"
  }
]
