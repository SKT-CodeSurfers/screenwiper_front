import {usePostPhotos} from '@/hooks/mutations/photos/usePostPhotos';
import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';

const LoadingScreen = ({navigation, route}: StackScreenProps<'Loading'>) => {
  const {formData} = route.params;

  const {mutate: analyze} = usePostPhotos({
    onSuccess: res => {
      console.log('onSuccess');
      console.log(res);

      navigation.replace('Result', {list: res.data});
    },
    onError: e => {
      Alert.alert('분석에 실패하였습니다.', `${e.message}`, [
        {
          text: '확인',
          onPress: () => navigation.pop(),
        },
      ]);
      console.error('onError', e);
    },
  });

  useEffect(() => {
    console.log('Received formData:', formData);

    if (!formData) navigation.pop();

    if (formData) analyze(formData);
  }, [formData]);

  return (
    <LoadingScreenContainer>
      <LottieView
        source={require('../../assets/json/loading.json')}
        style={{width: '100%', height: '30%'}}
        autoPlay
        loop
      />
      <TitleText>스크린샷을 분석 중이에요!</TitleText>
      <DescriptionText>조금만 기다려주세요</DescriptionText>
    </LoadingScreenContainer>
  );
};

export default LoadingScreen;

const LoadingScreenContainer = styled.SafeAreaView`
  flex: 1;

  ${({theme}) => theme.mixins.flexBox('column')};
  gap: 10px;
  margin-top: -30%;

  background: white;
`;

const TitleText = styled.Text`
  ${({theme}) => theme.fonts.title_sb_21};
`;

const DescriptionText = styled.Text`
  ${({theme}) => theme.fonts.body_m_15};
  color: ${({theme}) => theme.colors.gray5};
`;
