import DetailHeader from '@/components/Detail/DetailHeader';
import React, {useEffect} from 'react';
import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import CustomHeaderContainer from '@/components/common/CustomHeader/CustomHeaderContainer';
import Result from '@/components/common/Result/Result';
import {useGetPhoto} from '@/hooks/queries/photos/useGetPhoto';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import {Alert} from 'react-native';
import {useDeletePhotos} from '@/hooks/mutations/photos/useDeletePhotos';
import {useQueryClient} from '@tanstack/react-query';
import {PHOTOS_KEYS} from '@/hooks/queries/QueryKeys';

const DetailScreen = ({navigation, route}: StackScreenProps<'Detail'>) => {
  const {photoId} = route.params;

  const {data, isError} = useGetPhoto({photoId});
  const photo = data?.data;

  const queryClient = useQueryClient();

  const {mutate: deletePhoto} = useDeletePhotos({
    onSuccess(res) {
      console.log('res', res);
      queryClient.invalidateQueries({queryKey: PHOTOS_KEYS.lists()});

      navigation.pop();
    },
    onError(e) {
      console.log('e', e);
    },
  });

  const onDelete = () => {
    Alert.alert(
      '정말로 삭제하시겠습니까?',
      '삭제하면 기록을 복구할 수 없어요!',
      [
        {
          text: '아니요',
        },
        {text: '네', onPress: () => deletePhoto(photoId)},
      ],
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <DetailHeader goBack={() => navigation.pop()} onDelete={onDelete} />
      ),
    });
  }, [navigation]);

  if (!photo || isError)
    return (
      <CustomHeaderContainer>
        <CenterText> 데이터 조회에 실패하였습니다 </CenterText>
      </CustomHeaderContainer>
    );

  return (
    <CustomHeaderContainer>
      <Result data={photo} />
    </CustomHeaderContainer>
  );
};

export default DetailScreen;

const CenterText = styled.Text`
  width: 100%;
  padding: 50px 0;
  text-align: center;

  ${({theme}) => theme.mixins.flexBox()};
`;
