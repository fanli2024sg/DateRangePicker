// Componments
import { Outlet } from 'react-router-dom';

// Styles
import styles from './index.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Outlet />
    </div>
  );
}

export default App;
