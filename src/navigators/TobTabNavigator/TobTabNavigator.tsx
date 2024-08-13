import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PlaceCardList, PlanCardList, OthersCardList } from '@/components/CardView/CardList';
import { TopTabNavigatorProps } from '@/types/Main/CardTypes';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator({ placeCards, planCards, othersCards}: TopTabNavigatorProps) {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#4277FF',
      tabBarInactiveTintColor: '#666',
      tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
      tabBarIndicatorStyle: {
        backgroundColor: '#4277FF',
        height: 4,
        width: '10%',
        marginLeft: '12%',
        borderRadius: 2,
      },
      tabBarStyle: { backgroundColor: '#fff' },
    }}
  >
        <Tab.Screen name="장소">
        {() => <PlaceCardList data={placeCards} />}
        </Tab.Screen>
        <Tab.Screen name="일정">
          {() => <PlanCardList data={planCards} />}
        </Tab.Screen>
        <Tab.Screen name="기타">
          {() => <OthersCardList data={othersCards} />}
        </Tab.Screen>
      </Tab.Navigator>
  );
}
