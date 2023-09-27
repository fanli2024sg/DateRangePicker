import { lazy, Suspense } from 'react';

// Styles
import styles from './index.module.scss';

const DateRangePicker = lazy(() => import('../DateRangePicker'));

function App() {
  return (
    <div className={styles.App}>
      <Suspense fallback={<h1>Loading</h1>}>
        <DateRangePicker />
      </Suspense>
    </div>
  );
}

export default App;
