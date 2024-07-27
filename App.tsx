import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from 'navigators/Navigator';
import Styles from '@/styles';

const App = () => {
  return (
    <Styles>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </Styles>
  );
};

export default App;
