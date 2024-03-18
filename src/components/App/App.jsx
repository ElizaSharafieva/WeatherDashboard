import '../../styles/index.scss';
import styles from './styles.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  const theme = 'Dark'

  return (
    <div className={`${styles.app} theme${theme}`}>
      <div className={styles.app__container}>
        <Header />
        <Main />
      </div>
    </div>
);
}

export default App;
