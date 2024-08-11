import DetailHeader from '@/components/Detail/DetailHeader';
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const DetailScreen = () => {
  return (
    <LoadingScreenContainer>
      <DetailHeader />
      <Text>DetailScreen</Text>
    </LoadingScreenContainer>
  );
};

export default DetailScreen;

const LoadingScreenContainer = styled.SafeAreaView`
  flex: 1;

  ${({theme}) => theme.mixins.flexBox('column')};
`;
