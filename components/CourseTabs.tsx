"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "@/components/CourseCard";
import { cardData } from "@/constant";

const categories = [
  "All",
  "AI Fundamentals",
  "Legal Tech",
  "Machine Learning",
  "Cloud Computing",
];

export default function CourseTabs() {
  return (
    <div className="text-white pt-12 pb-12 px-2 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
        <p className="text-yellow-500 font-semibold text-sm sm:text-base tracking-wide">
          Ongoing Courses
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight sm:leading-snug">
          Enhance Your Skills With <br className="hidden sm:block" />
          Our Curated Courses.
        </h2>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Dive into our expertly curated selection of featured courses, designed
          to equip you with the skills and knowledge needed to excel.
        </p>

        <div className="mt-6">
          <a
            href="https://www.technobillion.ai/career"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-md bg-yellow-400 text-black text-sm sm:text-base font-medium hover:bg-yellow-500 transition-colors duration-300"
          >
            Enroll Now
          </a>
        </div>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="min-w-[80px] truncate data-[state=active]:bg-red-600 data-[state=active]:text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md bg-[#3F0405] text-gray-300"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-14">
            <div className="flex flex-col gap-6">
              {cardData
                .filter((c) => cat === "All" || c.category === cat)
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
