import {
  etudiantgetycourses,
  getThelastcoursethathaveprogressIn,
} from "@/actions/Etudiant/etudiant-get-mycourses";
import React from "react";
import CourseStudentItem from "./course-student-item";
import CourseInProgressCard from "../home/_compoents/courseinprogresscard";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ContinueTochapter from "../home/_compoents/continuetochapter";
import FetchSometeacherReveiw from "../home/_compoents/fetchSometeacherReveiw";

const CourseStudentList = async () => {
  const mycourses = await etudiantgetycourses();
  const laschapter = await getThelastcoursethathaveprogressIn();

  return (
    <div className="flex ml-4">
      <div className="">
        <span className="text-lg font-semibold mb-4 ml-2">
          Continue learning where you left off
        </span>
        <div className=" md:ml-30 md:w-[1200px]  p-4">
          <div className="flex items-center  justify-between space-x-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 p-4 rounded-lg shadow-md">
            <div className="flex space-x-4">
              <img
                alt="Course"
                className="w-14 h-14 "
                src={laschapter.courseInfo?.imageUrl!}
              />
              <div className="space-x-1">
                <h3 className="text-lg font-medium text-white">
                  {laschapter.courseInfo?.title!}
                </h3>
                <p className="text-gray-200">
                  {laschapter.thenextChapter?.title!}
                </p>
              </div>
            </div>
            <ContinueTochapter
              courseId={laschapter.courseInfo?.id!}
              chapterId={laschapter.thenextChapter?.id!}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[580px_580px] gap-8 place-content-center">
          {mycourses.map((course) => (
            <div key={course.id}>
              <CourseInProgressCard etudiantgetycourses={course} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block">
        <FetchSometeacherReveiw />
      </div>
    </div>
  );
};

export default CourseStudentList;
