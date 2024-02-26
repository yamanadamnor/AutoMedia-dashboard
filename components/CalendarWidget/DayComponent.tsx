import {
  format,
  isEqual,
  startOfDay,
  isSameMonth,
  isToday,
  isSameDay,
} from "date-fns";
import type { IDayComponent } from "@/components/interfaces";
import { cn } from "@/utils/cn";

function DayComponent({
  day,
  sonarrMedia,
  radarrMedia,
  selectedDay,
  onClick,
}: IDayComponent) {
  if (!sonarrMedia && !radarrMedia)
    return <h2 className="font-bold">No releases</h2>;

  const sonarrReleases = sonarrMedia.filter((media) => {
    const mediaDate = startOfDay(new Date(media.airDateUtc));
    return isEqual(mediaDate, startOfDay(day));
  });

  const radarrReleases = radarrMedia.filter((media) => {
    const digitalRelease = new Date(media.digitalRelease);
    const physicalRelease = new Date(media.physicalRelease);
    return (
      isEqual(startOfDay(digitalRelease), startOfDay(day)) ||
      isEqual(startOfDay(physicalRelease), startOfDay(day))
    );
  });

  return (
    <button
      className={cn(
        "flex h-12 w-9 select-none flex-col items-center justify-around justify-self-center rounded leading-none transition duration-300 ease-in-out hover:bg-[#272731] hover:shadow-service-sm",
        isSameMonth(day, selectedDay) ? "" : "text-gray-600",
        isSameDay(day, selectedDay) ? "bg-[#272731] shadow-lg" : "",
        isToday(day) ? "border border-gray-700" : "",
      )}
      onClick={onClick}
    >
      {format(day, "d")}
      <div className="flex w-full justify-around px-2">
        {radarrReleases && radarrReleases.length > 0 && (
          <div className="h-1.5 w-1.5 rounded-full bg-orange-400"></div>
        )}
        {sonarrReleases && sonarrReleases.length > 0 && (
          <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
        )}
      </div>
    </button>
  );
}

export default DayComponent;
