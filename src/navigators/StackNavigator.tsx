import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import LoadingScreen from '@/screens/Loading/Loading';
import MainScreen from 'screens/Main';
import BottomTabNavigator from './BottomTabNavigator/BottomTabNavigator';

export type StackParamList = {
  Tab: undefined;
  Main: undefined;
  Loading: undefined;
};

export type StackScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList>;
};

export default function StackNavigator() {
  const Stack = createNativeStackNavigator<StackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomTabNavigator} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  );
}
