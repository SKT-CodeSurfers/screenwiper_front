import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text} from 'react-native';
import {
  PlaceCardList,
  PlanCardList,
  OtherCardList,
} from '@/components/Main/CardView/CardList';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#4277FF',
        tabBarInactiveTintColor: '#666',
        tabBarIndicatorStyle: {
          backgroundColor: '#4277FF',
          height: 4,
          width: '10%',
          marginLeft: '12%',
          borderRadius: 2,
        },
        tabBarStyle: {backgroundColor: '#fff', paddingTop: 30},
        tabBarLabel: ({focused, color}) => (
          <Text
            style={{
              color,
              fontSize: 16,
              fontWeight: focused ? 'bold' : 'normal',
            }}>
            {route.name}
          </Text>
        ),
      })}>
      <Tab.Screen name="장소">{() => <PlaceCardList />}</Tab.Screen>
      <Tab.Screen name="일정">{() => <PlanCardList />}</Tab.Screen>
      <Tab.Screen name="기타">{() => <OtherCardList />}</Tab.Screen>
    </Tab.Navigator>
  );
}
