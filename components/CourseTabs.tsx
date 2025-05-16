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
    <div className="text-white py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-yellow-500 font-medium">Ongoing Courses</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          Enhance Your Skills With <br /> Our Curated Courses.
        </h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Dive into our expertly curated selection of featured courses, designed
          to equip you with the skills and knowledge needed to excel.
        </p>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-sm px-4 py-2 rounded-md bg-[#200000] text-gray-300"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-8">
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
