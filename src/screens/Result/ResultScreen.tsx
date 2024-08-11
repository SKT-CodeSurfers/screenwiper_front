import ResultHeader from '@/components/Result/ResultHeader';
import React from 'react';
import {Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const ResultScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <LoadingScreenContainer>
      <ResultHeader />

      <Text>ResultScreen{top}</Text>
    </LoadingScreenContainer>
  );
};

export default ResultScreen;

const LoadingScreenContainer = styled.SafeAreaView`
  flex: 1;

  ${({theme}) => theme.mixins.flexBox('column')};
  gap: 10px;

  position: relative;
`;
