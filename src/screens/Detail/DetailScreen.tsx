import DetailHeader from '@/components/Detail/DetailHeader';
import React, {useEffect} from 'react';
import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import CustomHeaderContainer from '@/components/common/CustomHeader/CustomHeaderContainer';
import Result from '@/components/common/Result/Result';
import {useGetPhoto} from '@/hooks/queries/photos/useGetPhoto';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

const DetailScreen = ({navigation, route}: StackScreenProps<'Detail'>) => {
  const {photoId} = route.params;

  const {data, isError} = useGetPhoto({photoId});
  const photo = data?.data;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <DetailHeader goBack={() => navigation.pop()} />,
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
