import 'react-native-gesture-handler';
import * as React from 'react';
import {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from 'navigators/Navigator';
import Styles from '@/styles';
import SplashScreen from 'react-native-splash-screen';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Styles>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </Styles>
  );
};

export default App;
