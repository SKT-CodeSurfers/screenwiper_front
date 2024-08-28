import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import LoadingScreen from '@/screens/Loading/LoadingScreen';
import BottomTabNavigator from '@/navigators/BottomTabNavigator/BottomTabNavigator';
import SplashScreen from '@/screens/Splash/SplashScreen';
import SignInScreen from '@/screens/SignIn/SignInScreen';
import SettingScreen from '@/screens/Setting/SettingScreen';
import ResultScreen from '@/screens/Result/ResultScreen';
import DetailScreen from '@/screens/Detail/DetailScreen';
import WebviewScreen from '@/screens/SignIn/WebviewScreen';
import {AnalyzePhotoResponse} from '@/hooks/mutations/photos/usePostPhotos';
export type StackParamList = {
  SignIn: undefined;
  Splash: undefined;
  Main: undefined;
  Loading: {formData: FormData};
  Setting: undefined;
  Result: {list: AnalyzePhotoResponse[]};
  Detail: undefined;
  WebView: { url: string };
};

export const enum StackMenu {
  SignIn = 'SignIn',
  Splash = 'Splash',
  Main = 'Main',
  Loading = 'Loading',
  Setting = 'Setting',
  Result = 'Result',
  Detail = 'Detail',
  WebView = 'WebView',
}

/**
 * Screen Props
 * */
export type StackScreenProps<Screen extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, Screen>;

export default function StackNavigator() {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={StackMenu.Splash} component={SplashScreen} />
      <Stack.Screen name={StackMenu.SignIn} component={SignInScreen} />

      <Stack.Screen name={StackMenu.Main} component={BottomTabNavigator} />

      <Stack.Screen name={StackMenu.Loading} component={LoadingScreen} />
      <Stack.Screen name={StackMenu.Result} component={ResultScreen} />
      <Stack.Screen name={StackMenu.Detail} component={DetailScreen} />
      <Stack.Screen name={StackMenu.Setting} component={SettingScreen} />
      <Stack.Screen name={StackMenu.WebView} component={WebviewScreen} />

    </Stack.Navigator>
  );
}
