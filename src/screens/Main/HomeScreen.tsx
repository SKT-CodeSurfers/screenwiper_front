import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <StyledView>
        <Text>Home</Text>
        <StyledTExt>Home</StyledTExt>
      </StyledView>
    </SafeAreaView>
  );
}

const StyledTExt = styled.Text`
  color: ${({theme}) => theme.colors.primary};
`;

const StyledView = styled.View`
  ${({theme}) => theme.mixins.flexBox()};
  gap: 5px;
`;
