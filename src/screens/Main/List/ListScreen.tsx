import React, {useEffect, useState} from 'react';
import TopTabNavigator from '@/navigators/TobTabNavigator/TobTabNavigator';
import rawData from '@/screens/Main/List/ListDummies.json';
import {TopTabNavigatorProps} from '@/types/Main/CardTypes';
import {categorizeData} from '@/utils/CategoryUtils';
import SafeAreaTabView from '@/components/common/SafeAreaTabView/SafeAreaTabView';
import {useGetPhotoList} from '@/hooks/queries/photos/useGetPhotoList';

export default function ListScreen() {
  const [data, setData] = useState<TopTabNavigatorProps | null>(null);

  // API 호출 테스트코드
  const [type, setType] = useState('장소');
  const [page, setPage] = useState(0);

  const {data: res} = useGetPhotoList({type: type, page: page});
  // console.log(res?.data);

  useEffect(() => {
    const categorizedData = categorizeData(rawData);
    setData(categorizedData);
  }, []);

  if (!data) return null;

  return (
    <SafeAreaTabView>
      <TopTabNavigator
        placeCards={data.placeCards}
        planCards={data.planCards}
        otherCards={data.otherCards}
      />
    </SafeAreaTabView>
  );
}
