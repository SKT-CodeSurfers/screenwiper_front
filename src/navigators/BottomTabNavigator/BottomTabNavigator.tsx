import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '@/screens/Main/HomeScreen';
import ListScreen from '@/screens/Main/ListScreen';
import MapScreen from '@/screens/Main/MapScreen';
import CalendarScreen from '@/screens/Main/CalendarScreen';
import TabBar from './TabBar';

export type TabParamList = {
  Home: undefined;
  List: undefined;
  Map: undefined;
  Calendar: undefined;
};

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Calender" component={CalendarScreen} />
    </Tab.Navigator>
  );
}

const screenOptions = {
  headerShown: false,
};
