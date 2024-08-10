import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import LoadingScreen from '@/screens/Loading/LoadingScreen';
import BottomTabNavigator from '@/navigators/BottomTabNavigator/BottomTabNavigator';
import SplashScreen from '@/screens/Splash/SplashScreen';
import SignInScreen from '@/screens/SignIn/SignInScreen';

export type StackParamList = {
  SignIn: undefined;
  Splash: undefined;
  Main: undefined;
  Loading: undefined;
};

export const enum StackMenu {
  SignIn = 'SignIn',
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
      <Stack.Screen name={StackMenu.SignIn} component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name={StackMenu.Splash} component={SplashScreen} />
      <Stack.Screen name={StackMenu.Main} component={BottomTabNavigator} />
      <Stack.Screen name={StackMenu.Loading} component={LoadingScreen} />
    </Stack.Navigator>
  );
}
