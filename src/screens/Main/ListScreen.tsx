import useNavigator from '@/navigators/useNavigator';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopTabNavigator from '@/navigators/TobTabNavigator/TobTabNavigator';
import rawData from '@/screens/Main/ListDummies.json';
import { TopTabNavigatorProps } from '@/types/Main/CardTypes';

const data: TopTabNavigatorProps = rawData as TopTabNavigatorProps;

export default function ListScreen() {
  const {stackNavigation, tabNavigation} = useNavigator();
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopTabNavigator 
        placeCards={data.placeCards}
        planCards={data.planCards}
        othersCards={data.othersCards}
      />
    </SafeAreaView>
  );
}
