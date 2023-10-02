// Types
import type { DateButton, Calendar } from "../types";

export function generateCalendar({
  month,
  year
}: {
  month: number;
  year: number;
}): Calendar {
  const currentDate = new Date(year, month, 1);
  const firstDayOfWeek = currentDate.getDay();
  const daysInPreviousMonth = firstDayOfWeek;
  let currentDatePointer = new Date(year, month, 1 - daysInPreviousMonth);

  const calendar: Calendar = [];

  for (let week = 0; week < 6; week++) {
    const dateButtonRow: DateButton[] = [];

    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      const currentMonth = currentDatePointer.getMonth();
      const date = new Date(currentDatePointer);

      dateButtonRow.push({
        date,
        ...(currentMonth !== month
          ? {
            disabled: true
          }
          : undefined)
      });
      currentDatePointer.setDate(currentDatePointer.getDate() + 1);
    }

    if (dateButtonRow.some(({ disabled }) => !disabled)) {
      calendar.push(dateButtonRow);
    }
  }

  return calendar;
} 