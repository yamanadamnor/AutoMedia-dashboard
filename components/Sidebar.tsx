import { cn } from "@/utils/cn";
import CalendarWidget from "./CalendarWidget/CalendarWidget";

export function Sidebar({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      Sidebar
      <CalendarWidget />
    </div>
  );
}
