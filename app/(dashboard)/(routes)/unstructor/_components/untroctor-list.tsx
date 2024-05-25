import React from "react";
import UnstroctorCard from "./untroctor-card";
import {
  getAllUnstroctor,
  getAllteachers,
} from "@/actions/teacher/get-all-unstroctor";
import SecondTeacherCard from "./secondteachercard";
import { Card } from "@/components/ui/card";
import FilterBtn from "./filterbtn";
import Cardfilter from "./cardfilter";

interface UntroctorListProps {
  teachers: Awaited<ReturnType<typeof getAllteachers>>;
}

export default function UntroctorList({ teachers }: UntroctorListProps) {
  return (
    <div>
      {/* <Cardfilter /> */}
      <Cardfilter />

      <div className="grid grid-cols-1 md:grid-cols-[580px_580px] gap-8 place-content-center">
        {teachers?.map((teacher, index) => (
          <div key={index}>
            <SecondTeacherCard teachers={teacher} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
