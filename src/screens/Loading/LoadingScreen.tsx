import LottieView from 'lottie-react-native';
import React from 'react';
import styled from 'styled-components/native';

const LoadingScreen = () => {
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
