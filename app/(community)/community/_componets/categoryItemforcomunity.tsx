"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons";
import qs from "query-string";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSportsMode,
  FcSalesPerformance,
} from "react-icons/fc";
import { Category } from "@prisma/client";
import IconComponent from "@/app/(dashboard)/(routes)/search/_components/icon-components";

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
    "Computer Science": FcMultipleDevices,
    Mathematics: FcEngineering,
    Physics: FcOldTimeCamera,
    Chemistry: FcSalesPerformance,
    Biology: FcSportsMode,
    Economics: FcFilmReel,
    Business: FcSalesPerformance,
    Psychology: FcMusic,
    History: FcOldTimeCamera,
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
