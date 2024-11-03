import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import ListCard from './CardItem';
import {CardItem} from '@/types/Main/CardTypes'; // 타입 가져오기
import useNavigator from '@/navigators/useNavigator';
import {useGetPhotoList} from '@/hooks/queries/photos/useGetPhotoList';

export function PlaceCardList() {
  const [page, setPage] = useState(0);
  const {data: res} = useGetPhotoList({type: '장소', page: page});
  const list = res?.data.photos;
  console.log(res);

  return (
    <FlatList
      data={list}
      renderItem={({item}) => <ListCard item={item} />}
      keyExtractor={item => item.photoId}
      style={{backgroundColor: '#FCFCFC'}}
      contentContainerStyle={{alignItems: 'center', paddingVertical: 10}}
      ItemSeparatorComponent={() => <View style={{height: 15}} />}
    />
  );
}

export function PlanCardList() {
  const [page, setPage] = useState(0);
  const {data: res} = useGetPhotoList({type: '일정', page: page});
  const list = res?.data.photos;
  console.log(res);

  return (
    <FlatList
      data={list}
      renderItem={({item}) => <ListCard item={item} />}
      keyExtractor={item => item.photoId}
      style={{backgroundColor: '#FCFCFC'}}
      contentContainerStyle={{alignItems: 'center', paddingVertical: 10}}
      ItemSeparatorComponent={() => <View style={{height: 15}} />}
    />
  );
}

export function OtherCardList() {
  const [page, setPage] = useState(0);
  const {data: res} = useGetPhotoList({type: '기타', page: page});
  const list = res?.data.photos;
  console.log(res);

  return (
    <FlatList
      data={list}
      renderItem={({item}) => <ListCard item={item} />}
      keyExtractor={item => item.photoId}
      style={{backgroundColor: '#FCFCFC'}}
      contentContainerStyle={{alignItems: 'center', paddingVertical: 10}}
      ItemSeparatorComponent={() => <View style={{height: 15}} />}
    />
  );
}
