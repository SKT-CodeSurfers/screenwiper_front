import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const DetailScreen = () => {
  return (
    <LoadingScreenContainer>
      <Text>DetailScreen</Text>
    </LoadingScreenContainer>
  );
};

export default DetailScreen;

const LoadingScreenContainer = styled.SafeAreaView`
  flex: 1;

  ${({theme}) => theme.mixins.flexBox('column')};
  gap: 10px;
  margin-top: -30%;
`;
