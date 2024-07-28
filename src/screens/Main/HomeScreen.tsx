import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export default function HomeScreen({navigation}: StackScreenProps) {
  return (
    <SafeAreaView>
      <StyledView>
        <StyledText>Home</StyledText>

        <Button
          title="Go to Loading"
          onPress={() => navigation.navigate('Loading')}
        />

        <Button
          title="Go to Splash"
          onPress={() => navigation.navigate('Splash')}
        />
      </StyledView>
    </SafeAreaView>
  );
}

const StyledText = styled.Text`
  ${({theme}) => theme.fonts.title_sb_21};
`;

const StyledView = styled.View`
  ${({theme}) => theme.mixins.flexBox('column')};
  gap: 5px;
`;
