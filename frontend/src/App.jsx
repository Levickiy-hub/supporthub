import AppRouter from '@/router';
import { ToolBar } from './components';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <ToolBar />
      <AppRouter />
    </div>)
}

export default App;
