import '../../styles/index.scss';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import styles from './styles.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  const theme = useSelector((state) => state.theme.theme)




const route = useRoute();
console.log(route.name);

  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords
    console.log(position)
  })

  console.log(navigator)

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
