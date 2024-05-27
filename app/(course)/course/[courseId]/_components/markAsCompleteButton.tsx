"use client";

import { markAsComplete } from "@/actions/Etudiant/mark-asComplete";
import { Button } from "@/components/ui/button";

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
  const onclick = (chapterId: string) => {
    markAsComplete(chapterId, courseId);
    toast.success("Chapter marked as complete");

    window.location.reload();
  };

  return (
    <div>
      <Button
        disabled={disabled || !isPurchased}
        onClick={() => onclick(chapterId)}
        className="w-full"
        variant={mustUploadwork ? "secondary" : "primary"}
      >
        {mustUploadwork ? "Upload your work" : "Mark as complete"}
      </Button>
    </div>
  );
}
