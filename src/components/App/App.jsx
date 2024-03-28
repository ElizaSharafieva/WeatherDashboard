import '../../styles/index.scss';
import { useSelector } from 'react-redux';
// import { useRoute } from '@react-navigation/native';

import styles from './styles.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import AttentionPopup from '../AttentionPopup/AttentionPopup';

function App() {
  const theme = useSelector((state) => state.theme.theme)

  return (
    <div className={`${styles.app} theme${theme}`}>
      <div className={styles.app__container}>
        <Header />
        <Main />
        {/* <AttentionPopup /> */}
      </div>
    </div>
);
}

export default App;
