import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '@/screens/Main/Home/HomeScreen';
import ListScreen from '@/screens/Main/List/ListScreen';
import MapScreen from '@/screens/Main/MapScreen';
import CalendarScreen from '@/screens/Main/CalendarScreen';
import TabBar from './TabBar';
import {StackParamList} from '../StackNavigator/StackNavigator';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import useShareExtension from '@/hooks/useShareExtension';

export type TabParamList = {
  Home: undefined;
  List: undefined;
  Map: undefined;
  Calendar: undefined;
};

export const enum TabMenu {
  Home = 'Home',
  List = 'List',
  Map = 'Map',
  Calendar = 'Calendar',
}

export enum TabMenuLabel {
  Home = '홈',
  List = '기록',
  Map = '지도',
  Calendar = '캘린더',
}

export default function BottomTabNavigator() {
  useShareExtension();
  const Tab = createBottomTabNavigator<TabParamList>();

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={TabMenu.Home} component={HomeScreen} />
      <Tab.Screen name={TabMenu.List} component={ListScreen} />
      <Tab.Screen name={TabMenu.Map} component={MapScreen} />
      <Tab.Screen name={TabMenu.Calendar} component={CalendarScreen} />
    </Tab.Navigator>
  );
}

const screenOptions = {
  headerShown: false,
};

export type TabScreenProps<Screen extends keyof TabParamList> =
  BottomTabScreenProps<TabParamList, Screen>;

// Stack 中 Bottom Tab 중첩된 화면에서 사용
export type TabOfStackScreenProps<
  StackScreen extends keyof StackParamList,
  TabScreen extends keyof TabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, TabScreen>,
  NativeStackScreenProps<StackParamList, StackScreen>
>;
