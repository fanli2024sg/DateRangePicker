// Styles
import styles from './index.module.scss';

function DateRangePicker() {

  return (
    <div className={styles.dateRangePicker}>
      <div className={styles.dateRangePickerHeader}>
        <div className={styles.yearMonth}>September 2023</div>
        <div className={styles.buttons}>
          <button className={styles.leftButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.svg}>
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className={styles.rightButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={styles.svg}>
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr className={styles.theadTr}>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default DateRangePicker;