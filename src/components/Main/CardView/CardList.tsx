import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import ListCard from './CardItem';
import {useGetPhotoList} from '@/hooks/queries/photos/useGetPhotoList';
import styled from 'styled-components/native';

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
      ListEmptyComponent={
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 20}}>
          <EmptyText style={{fontSize: 16, color: '#999'}}>사진을 업로드 해주세요.</EmptyText>
        </View>
      }
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
      ListEmptyComponent={
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 20}}>
          <EmptyText style={{fontSize: 16, color: '#999'}}>사진을 업로드 해주세요.</EmptyText>
        </View>
      }
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
      ListEmptyComponent={
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 20}}>
          <EmptyText style={{fontSize: 16, color: '#999'}}>사진을 업로드 해주세요.</EmptyText>
        </View>
      }
    />
  );
}

const EmptyText = styled.Text`
  width: 100%;
  padding: 50px 0;
  text-align: center;

  ${({theme}) => theme.mixins.flexBox()};
`;
