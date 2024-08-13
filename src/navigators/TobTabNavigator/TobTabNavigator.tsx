import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PlaceCardList, ScheduleCardList, OthersCardList } from '@/components/CardView/CardList';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#758CF7',
          tabBarInactiveTintColor: '#666',
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
          tabBarIndicatorStyle: { backgroundColor: '#758CF7' },
          tabBarStyle: { backgroundColor: '#fff' },
        }}
      >
        <Tab.Screen name="장소" component={PlaceCardList} />
        <Tab.Screen name="일정" component={ScheduleCardList} />
        <Tab.Screen name="기타" component={OthersCardList} />
      </Tab.Navigator>
  );
}
