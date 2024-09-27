import styles from "./App.module.scss";
import { TimeLineContainer } from '../widgets/timeLineContainer';

function App() {

  return (
    <main className={styles['main']}>
      <TimeLineContainer />
    </main>
  );
}

export default App;
