import 'react-native-gesture-handler';
import * as React from 'react';
import {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from 'navigators/Navigator';
import Styles from '@/styles';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '@/api/queryClient';
import {addScreenshotListener} from 'react-native-detector';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();

    const userDidScreenshot = () => {
      console.log('Screenshot!');
    };
    const unsubscribe = addScreenshotListener(userDidScreenshot);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Styles>
          <SafeAreaProvider>
            <Navigator />
          </SafeAreaProvider>
        </Styles>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default App;
