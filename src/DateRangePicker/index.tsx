// Hooks
import { useEffect, useState } from 'react';

// Components
import { LeftOutline, RightOutline } from '../icons';
import { Link } from 'react-router-dom';

// Utilities
import { generateCalendar } from '../utilities/generateCalendar';

// Styles
import styles from './index.module.scss';

type Props = {
  onRangeChange?: ({ startDate, endDate }) => void;
}

function DateRangePicker({ onRangeChange }: Props) {
  const toady = new Date();
  const [month, setMonth] = useState(toady.getMonth());
  const [year, setYear] = useState(toady.getFullYear());
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const calendarData = generateCalendar({ month, year });

  useEffect(() => {
    onRangeChange && onRangeChange({ startDate, endDate });
  }, [startDate, endDate]);

  const handleClick = ({ date }: { date: Date }) => {
    if (!date) {
      return;
    }

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

  return (
    <div>
      <Link to='/dateRangePickerV2'>切換至V2</Link>
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
                    <td
                      key={dayIndex}
                      className={
                        inRange ? styles.inRange : undefined
                          || isToday ? styles.isToday : undefined}>
                      <button
                        className={disabled ? styles.disabled : undefined}
                        disabled={disabled}
                        onClick={() => handleClick({ date })}>
                        {`${date.getDate()}日`}
                      </button>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.result}>
        {`${startDate ? `你選了 ${startDate.toLocaleDateString()}` : ''}${endDate ? ` 到 ${endDate.toLocaleDateString()}` : ''} `}
      </div>
      <div className={styles.result}>

      </div>
    </div>
  );
};

function Component() {
  return <DateRangePicker onRangeChange={({ startDate, endDate }) => console.log(`${startDate ? `你選了 ${startDate.toLocaleDateString()}` : ''}${endDate ? ` 到 ${endDate.toLocaleDateString()}` : ''} `)} />
}

export { Component }; 