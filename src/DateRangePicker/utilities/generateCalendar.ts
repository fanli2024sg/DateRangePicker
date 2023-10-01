export function generateCalendar({
  month,
  year,

}: {
  month: number;
  year: number;
}): {
  date: Date;
  disabled?: boolean;
}[][] {
  const currentDate = new Date(year, month, 1);
  const firstDayOfWeek = currentDate.getDay();
  const daysInPreviousMonth = firstDayOfWeek;
  let currentDatePointer = new Date(year, month, 1 - daysInPreviousMonth);

  const result: {
    date: Date;
    disabled?: boolean;
  }[][] = [];

  for (let week = 0; week < 6; week++) {
    const weekArray: {
      date: Date;
      disabled?: boolean;
    }[] = [];

    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      const currentMonth = currentDatePointer.getMonth();
      const date = new Date(currentDatePointer);

      weekArray.push({
        date,
        ...(currentMonth !== month
          ? {
            disabled: true
          }
          : undefined),
        ...(currentMonth !== month
          ? {
            disabled: true
          }
          : undefined)
      });
      currentDatePointer.setDate(currentDatePointer.getDate() + 1);
    }

    if (weekArray.some(({ disabled }) => !disabled)) {
      result.push(weekArray);
    }
  }

  return result;
} 