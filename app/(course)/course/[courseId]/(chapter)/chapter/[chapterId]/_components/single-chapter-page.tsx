import { db } from "@/lib/db";
import ChapterHeader from "./chapter-header";
import ChapterTitle from "./chapter-title";
import ChapterVedio from "./chapter-vedio";

import { hasReportChapter } from "@/actions/Etudiant/has-report-chapter";
import ChapterReport from "./chapter-report";
import ChapterButtons from "./chapter-btns";
import ChapterDescreption from "./chapter-descreption";
import { getChapterById } from "@/actions/chapter/get-chapter-by-id";
import ChapterResources from "./chapter-resources";
import { ScrollArea } from "@/components/ui/scroll-area";
import { auth } from "@/auth";
import { studentShouldreport } from "@/actions/chapter/studentshouldreportsomthing";

interface ChapterPageProps {
  courseId: string;
  chapterId: string;
}

const SingleChapterPage = async ({ courseId, chapterId }: ChapterPageProps) => {
  const courseName = await db.course.findUnique({
    where: {
      id: courseId,
    },
    select: {
      title: true,
      imageUrl: true,
    },
  });

  const chapter = await getChapterById(chapterId);

  const existingReport = await hasReportChapter(chapterId);
  const user = await auth();
  const userId = user?.user.id as string;
  const studentshouldreport=await studentShouldreport(chapterId)
  

  const isCompltedthechapter = await db.userProgress.findFirst({
    where: {
      chapterId: chapterId,
      userId: userId,
    },
    select: {
      isCompleted: true,
    },
  });
  return (
    <div>
      <ChapterHeader
        courseId={courseId}
        chapter={chapter}
        courseName={courseName?.title!}
      />
      {/* <ChapterTitle title={chapter?.title!} /> */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="col-span-2 md:col-span-3 ">
          <ChapterVedio
            videosrc={chapter?.videoUrl}
            img={courseName?.imageUrl!}
          />
        </div>
        <div className="col-span-2 items-center md:col-span-1">
          <ChapterReport
            chapterId={chapterId}
            courseId={courseId}
            existingReport={existingReport}
          />

          <div className="h-[280px]  mb-8 ">
            <ScrollArea className="h-[280px]">
              <ChapterResources resources={chapter?.resources!} />
            </ScrollArea>
          </div>
        </div>
      </div>

      <ChapterButtons
        chapter={chapter!}
        hasreport={!!existingReport}
        courseId={courseId}
        isCompltedthechapter={isCompltedthechapter?.isCompleted!}
        studentshouldreport={studentshouldreport}
        
      />
      <hr className="m-8 mt-12" />
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-6">
        <ChapterDescreption descreption={chapter?.descreption!} />
      </div>
    </div>
  );
};

export default SingleChapterPage;
