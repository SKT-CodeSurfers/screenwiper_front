import 'react-native-gesture-handler';
import * as React from 'react';
import {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from 'navigators/Navigator';
import Styles from '@/styles';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Styles>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </Styles>
    </GestureHandlerRootView>
  );
};

export default App;
