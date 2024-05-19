import SingleRoomPage from "./_components/singlerrompage";
import { themettingStillexist } from "@/actions/metting/themetingstillexist";

import { GhostIcon } from "lucide-react";
import { theteacheristheownerofthemeet } from "@/actions/system/theteacheristheownerofthemeet";
import { studenthasaccestomeet } from "@/actions/metting/studenthasaccestothemeet";

const Page = async (params: {
  params: {
    roomId: string;
  };
}) => {
  const themeetingstillexist = await themettingStillexist(params.params.roomId);
  if (!themeetingstillexist) {
    return (
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-y-auto h-screen my-auto mt-64">
          <NoMeetingFound />
        </div>
      </div>
    );
  }
  const theuseristheownerofthemeeting = await theteacheristheownerofthemeet(
    params.params.roomId
  );
  const hasaccesornot = await studenthasaccestomeet(params.params.roomId);
  if (!hasaccesornot) {
    return (
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-y-auto h-screen my-auto mt-64">
          <Noaccestothemeeting />
        </div>
      </div>
    );
  }

  return (
    <>
      <SingleRoomPage
        theuseristheownerofthemeeting={theuseristheownerofthemeeting}
      />
    </>
  );
};

export default Page;

export function NoMeetingFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <GhostIcon className="h-16 w-16 text-muted-foreground" />
      <div className="text-2xl font-semibold text-muted-foreground">
        No meeting found
      </div>
      <div className="text-sm text-muted-foreground">
        This meeting has been finished or not found
      </div>
    </div>
  );
}
export function Noaccestothemeeting() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <GhostIcon className="h-16 w-16 text-muted-foreground" />
      <div className="text-2xl font-semibold text-muted-foreground">
        You do not have access to this meeting
      </div>
      <div className="text-sm text-muted-foreground">
        this meeting is not available for you to join
      </div>
    </div>
  );
}
