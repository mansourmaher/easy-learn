"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons";

import { Category } from "@prisma/client";
import IconComponent from "@/app/(dashboard)/(routes)/search/_components/icon-components";

import {
  FcBusiness,
  FcCalculator,
  FcCamera,
  FcBiotech,
  FcCurrencyExchange,
  FcDepartment,
  FcIdea,
  FcTimeline,
  FcReading,
} from "react-icons/fc";

interface CategoryItemProps {
  label: string;

  value: string;
  commId: { id: string }[];
}

export const CategoryItemforComunty = ({
  label,
  commId,

  value,
}: CategoryItemProps) => {
  const iconsMap: Record<Category["name"], IconType> = {
    "Computer Science": FcIdea, // Represents innovation and ideas
    Mathematics: FcCalculator, // Represents calculations and math
    Physics: FcTimeline, // Represents concepts in physics
    Chemistry: FcBusiness, // Represents business and chemistry
    Biology: FcBiotech, // Represents biological science
    Economics: FcCurrencyExchange, // Represents economics and currency
    Business: FcDepartment, // Represents a business department
    Psychology: FcReading, // Represents studying and psychology
    History: FcCamera,
  };
  const pathname = usePathname();
  const comunityIdInthepathname = pathname.split("/")[2];
  const router = useRouter();
  const searchParams = useSearchParams();
  const communtyIdwhenUrlcontainsPost =
    comunityIdInthepathname.split("post")[0];

  const currentCategory = searchParams.get("category");
  const currenTitle = searchParams.get("title");

  const isSelected = communtyIdwhenUrlcontainsPost === commId[0].id;
  const onClick = () => {
    router.push(`/community/${commId[0].id}`);
  };
  return (
    <button
      onClick={() => onClick()}
      className={cn(
        "py-2 px-6 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition",
        isSelected && "border-sky-700 bg-sky-200/20 text-sky-700"
      )}
      type="button"
    >
      <IconComponent Icon={iconsMap[label as Category["name"]]} />
      <div className="truncate"> {label}</div>
    </button>
  );
};
