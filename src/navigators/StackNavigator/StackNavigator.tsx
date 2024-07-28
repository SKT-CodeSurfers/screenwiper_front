import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import LoadingScreen from '@/screens/Loading/LoadingScreen';
import BottomTabNavigator from '@/navigators/BottomTabNavigator/BottomTabNavigator';
import SplashScreen from '@/screens/\bSplash/SplashScreen';

export type StackParamList = {
  Splash: undefined;
  Main: undefined;
  Loading: undefined;
};

export const enum StackMenu {
  Splash = 'Splash',
  Main = 'Main',
  Loading = 'Loading',
}

export type StackScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList>;
};

export default function StackNavigator() {
  const Stack = createNativeStackNavigator<StackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name={StackMenu.Splash} component={SplashScreen} />
      <Stack.Screen name={StackMenu.Main} component={BottomTabNavigator} />
      <Stack.Screen name={StackMenu.Loading} component={LoadingScreen} />
    </Stack.Navigator>
  );
}
