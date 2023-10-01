// Hooks
import { useState } from 'react';

// Components
import { LeftOutline, RightOutline } from '../icons';


// Utilities
import { generateCalendar } from './utilities/generateCalendar';

// Styles
import styles from './index.module.scss';

function DateRangePicker() {
  const toady = new Date();
  const [month, setMonth] = useState(toady.getMonth());
  const [year, setYear] = useState(toady.getFullYear());
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const calendarData = generateCalendar({ month, year });

  return (
    <div className={styles.dateRangePicker}>
      <div className={styles.dateRangePickerHeader}>
        <div className={styles.yearMonth}>{`${year}年${month + 1}月`}</div>
        <div className={styles.buttons}>
          <button className={styles.leftButton} onClick={
            () => {
              const preMonth = new Date(year, month - 1);
              setMonth(preMonth.getMonth());
              setYear(preMonth.getFullYear());
            }
          }>
            <LeftOutline />
          </button>
          <button className={styles.rightButton} onClick={
            () => {
              const preMonth = new Date(year, month + 1);
              setMonth(preMonth.getMonth());
              setYear(preMonth.getFullYear());
            }
          }>
            <RightOutline />
          </button>
        </div>
      </div>
      <table>
        <tbody>{
          calendarData.map((week, rowIndex) => (
            <tr key={rowIndex} className={styles.tbodyTr}>
              {week.map(({ date, disabled }, dayIndex) => {
                const inRange = startDate <= date && date <= endDate;
                const isToday = new Date().toDateString() === date.toDateString();
                return (
                  <td key={dayIndex} className={inRange && styles.inRange || isToday && styles.isToday}>
                    <button className={disabled && styles.disabled} disabled={disabled} onClick={
                      () => {
                        if (!startDate) {
                          setStartDate(date);
                        } else {
                          if (date < startDate) {
                            setStartDate(undefined);
                          } else if (!endDate) {
                            setEndDate(date);
                          }
                        }
                      }
                    }>
                      {`${date.getDate()}日`}
                    </button>
                  </td>
                )
              })}
            </tr>
          ))}</tbody>
      </table>
    </div>
  );
};

export default DateRangePicker;