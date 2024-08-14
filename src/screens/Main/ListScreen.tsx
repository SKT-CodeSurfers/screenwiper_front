import useNavigator from '@/navigators/useNavigator';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopTabNavigator from '@/navigators/TobTabNavigator/TobTabNavigator';
import rawData from '@/screens/Main/ListDummies.json';
import { TopTabNavigatorProps } from '@/types/Main/CardTypes';
import { categorizeData } from '@/utils/CategoryUtils';

export default function ListScreen() {
  const { stackNavigation, tabNavigation } = useNavigator();
  const [data, setData] = useState<TopTabNavigatorProps | null>(null);

  useEffect(() => {
    const categorizedData = categorizeData(rawData);
    setData(categorizedData);
  }, []);

  if (!data) return null;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopTabNavigator 
        placeCards={data.placeCards}
        planCards={data.planCards}
        otherCards={data.otherCards}
      />
    </SafeAreaView>
  );
}
