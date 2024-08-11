import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const ResultScreen = () => {
  return (
    <LoadingScreenContainer>
      <Text>ResultScreen</Text>
    </LoadingScreenContainer>
  );
};

export default ResultScreen;

const LoadingScreenContainer = styled.SafeAreaView`
  flex: 1;

  ${({theme}) => theme.mixins.flexBox('column')};
  gap: 10px;
  margin-top: -30%;
`;
