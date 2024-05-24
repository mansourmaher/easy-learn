import { fetchSometeacherReveiwforme } from "@/actions/Etudiant/fetchSometeacherReveiw";
import { Card } from "@/components/ui/card";
import React from "react";
import ReveiwItem from "./reviewitem";

export const FetchSometeacherReveiw = async () => {
  const somereview = await fetchSometeacherReveiwforme();
  console.log(somereview);

  return (
    <div className="flex flex-col">
      <span className="text-lg font-semibold mb-2 ml-6">
        We pick some reviews for you
      </span>
      <Card className="rounded-3xl border p-4 bg-muted/40 w-96 mx-4">
        <div className="flex flex-col">
          {/* <span className="text-lg font-semibold">
          We pick some reviews for you
        </span>
        <span className="text-sm text-muted-foreground mt-1.5  line-clamp-3 h-14 mb-6"></span> */}
          {somereview?.map((review, index) => (
            <div key={index}>
              <ReveiwItem review={review} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default FetchSometeacherReveiw;
