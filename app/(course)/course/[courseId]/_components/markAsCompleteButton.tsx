"use client";

import { markAsComplete } from "@/actions/Etudiant/mark-asComplete";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import React from "react";
import toast from "react-hot-toast";

interface markAsCompleteButtonProps {
  disabled?: boolean;

  chapterId: string;
  courseId: string;
  mustUploadwork?: boolean;
  isPurchased: boolean;
}

export default function MarkAsCompleteButton({
  disabled,
  courseId,
  mustUploadwork,
  isPurchased,

  chapterId,
}: markAsCompleteButtonProps) {
  const router = useRouter();
  const onclick = (chapterId: string) => {
    if (!isPurchased) {
      router.push(`/api/courses/${courseId}/checkout`);
    }
    markAsComplete(chapterId, courseId);
    toast.success("Chapter marked as complete");

    window.location.reload();
    router.refresh();
  };

  return (
    <div>
      <Button
        disabled={disabled}
        onClick={() => onclick(chapterId)}
        className="w-full"
        variant={mustUploadwork ? "secondary" : "primary"}
      >
        {mustUploadwork ? "Upload your work" : "Mark as complete"}
      </Button>
    </div>
  );
}
