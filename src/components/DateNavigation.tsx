
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface DateNavigationProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  onCalendarOpen: () => void;
}

const DateNavigation = ({ currentDate, onDateChange, onCalendarOpen }: DateNavigationProps) => {
  const goToPreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    onDateChange(newDate);
  };

  const goToNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    onDateChange(newDate);
  };

  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <button
        onClick={goToPreviousDay}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Día anterior"
      >
        <ChevronLeft className="w-6 h-6 text-ephemeri" />
      </button>
      <button
        onClick={onCalendarOpen}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all font-labrada text-gray-700"
      >
        <Calendar className="w-4 h-4" />
        {format(currentDate, "d 'de' MMMM yyyy", { locale: es })}
      </button>
      <button
        onClick={goToNextDay}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Día siguiente"
      >
        <ChevronRight className="w-6 h-6 text-ephemeri" />
      </button>
    </div>
  );
};

export default DateNavigation;
