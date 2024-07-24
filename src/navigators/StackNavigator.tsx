import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import LoadingScreen from 'screens/Loading';
import MainScreen from 'screens/Main';

export type StackParamList = {
  Main: undefined;
  Loading: undefined;
};

export type StackScreenName = keyof StackParamList;

export default function StackNavigator() {
  const Stack = createStackNavigator<StackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  );
}
