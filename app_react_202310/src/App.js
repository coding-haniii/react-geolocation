import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './assets/scss/App.modules.scss';
import CommonRouter from './pages/CommonRouter';
import GlobalStyles from './pages/GlobalStyles';

function App() {
  let location = useLocation();

  //useEffect( () => {
   //   ga('send', 'pageview');
  //},[location])
  
  return (
    <div className={styles.app} >
      <GlobalStyles />
      <CommonRouter />
   </div>
  );
}
export default App;
