import { Button } from "@/components/ui/button"
import { CourseCardType } from "@/constant"
import { Star } from "lucide-react"
import { Clock, PlayCircle } from "lucide-react"

type Props = {
  course: CourseCardType
}

const statusColorMap: Record<CourseCardType["status"], string> = {
  Active: "bg-green-700",
  Scheduled: "bg-yellow-400 text-black",
  Cancelled: "bg-red-700",
}

const CourseCard= ({ course }:Props) => {
  return (
    <div className="rounded-xl overflow-hidden border border-[#220707] bg-[#3F0405] text-white shadow-md">
      <div className="relative">
        <img src={course.image} alt={course.title} className="w-full h-44 object-cover" />
        <span
          className={`absolute top-3 left-3 text-lg font-bold px-10 py-1 rounded-full shadow-lg ${statusColorMap[course.status]}`}
          style={{
            minWidth:
              course.status === "Active"
                ? "90px"
                : "160px", 
            textAlign: "center",
            background: course.status === "Cancelled" ? "rgba(0,0,0,0.5)" : undefined,
            border: "2px solid #fff",
          }}
        >
          {course.status}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 leading-snug">{course.title}</h3>

        <div className="flex items-center text-sm mb-3">
          <div className="flex text-white mr-2">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
          <span className="text-gray-300 ml-2">Rating: {course.rating}.0/5</span>
        </div>

        <div className="flex gap-4 text-sm mb-4">
          <div className="flex items-center gap-1 bg-[#3b0000] px-3 py-1 rounded-md">
            <PlayCircle className="w-4 h-4" />
            <span>{course.sessions} Session</span>
          </div>
          <div className="flex items-center gap-1 bg-[#3b0000] px-3 py-1 rounded-md">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        <Button variant="outline" className="border-yellow-500 text-white bg-transparent hover:text-black">
          Course Details
        </Button>
      </div>
    </div>
  )
}

export default CourseCard
