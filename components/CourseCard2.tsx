import { Button } from "@/components/ui/button";
import { CourseCardType } from "@/constant";
import { Clock, PlayCircle } from "lucide-react";

type Props = {
  course: CourseCardType;
};

const statusColorMap: Record<CourseCardType["status"], string> = {
  Active: "bg-green-500",
  Scheduled: "bg-yellow-400 text-black",
  Cancelled: "bg-red-600",
};

const CourseCard = ({ course }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden border border-[#220707] bg-[#3F0405] text-white shadow-md">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-32 sm:h-44 md:h-52 lg:h-60 xl:h-65 object-cover rounded-t-xl"
        />
        <span
  className="absolute top-3 left-3 sm:left-4 flex items-center justify-center"
>
  <span className="relative w-4 h-4 sm:w-5 sm:h-5">
    {/* Blinking (pulse) animation */}
    <span
      className={`
        absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping
        ${
          course.status === "Active"
            ? statusColorMap[course.status]
            : course.status === "Scheduled"
            ? statusColorMap[course.status]
            : statusColorMap[course.status]
        }
      `}
    />
    {/* Static dot */}
    <span
      className={`
        relative inline-flex rounded-full w-4 h-4 sm:w-5 sm:h-5
        ${
          course.status === "Active"
            ? statusColorMap[course.status]
            : course.status === "Scheduled"
            ? statusColorMap[course.status]
            : statusColorMap[course.status]
        }
      `}
    />
  </span>
</span>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-2 leading-snug">
          {course.title}
        </h3>

        <div className="flex items-center text-xs sm:text-sm mb-3">
          <div className="flex text-white mr-2">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
          </div>
          <span className="text-gray-300 ml-2">
            Rating: {course.rating}.0/5
          </span>
        </div>

        <div className="flex gap-2 sm:gap-4 text-xs sm:text-sm mb-4">
          <div className="flex items-center gap-1 bg-[#3b0000] px-2 sm:px-3 py-1 rounded-md">
            <PlayCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{course.sessions} Session</span>
          </div>
          <div className="flex items-center gap-1 bg-[#3b0000] px-2 sm:px-3 py-1 rounded-md">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="border-yellow-500 text-white bg-transparent hover:bg-yellow-500 hover:text-black text-xs sm:text-sm w-full sm:w-auto transition-colors duration-300"
        >
          Course Details
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
