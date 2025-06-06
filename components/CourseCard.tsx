import { Button } from "@/components/ui/button";
import { CourseCardType } from "@/constant";
import { Clock, PlayCircle } from "lucide-react";

type Props = {
  course: CourseCardType;
};

const CourseCard = ({ course }: Props) => {
  const getDotColor = () => {
    switch (course.status) {
      case "Active":
        return "bg-green-500";
      case "Scheduled":
        return "bg-yellow-400";
      case "Cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  const getPingColor = () => {
    switch (course.status) {
      case "Active":
        return "bg-green-400";
      case "Scheduled":
        return "bg-yellow-300";
      case "Cancelled":
        return "bg-red-400";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="rounded-xl overflow-hidden border border-[#220707] bg-[#3F0405] text-white shadow-md">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-32 sm:h-44 md:h-52 lg:h-60 xl:h-65 object-cover rounded-t-xl"
        />
        {/* Blinking status dot + text */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#5a0000]/80 border border-red-700/30 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 text-xs sm:text-sm font-semibold">
          {/* {course.status === "Active" && ( */}
          <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4">
            <span
              className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${getPingColor()}`}
            />
            <span
              className={`relative inline-flex rounded-full w-3.5 h-3.5 sm:w-4 sm:h-4 ${getDotColor()}`}
            />
          </div>
          {/* )} */}
          <span className="capitalize">{course.indicator}</span>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-2 leading-snug">
          {course.title}
        </h3>

        {/* Rating */}
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

        {/* Sessions and Duration */}
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

        {/* Action Button */}
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
