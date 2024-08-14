import FloatingButton from '@/components/Main/FloatingButton';
import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import React from 'react';
import {Modal} from 'react-native';
import {Button, Text} from 'react-native';
import {ImagePickerResponse} from 'react-native-image-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export default function HomeScreen({navigation}: StackScreenProps) {
  function handleOnResult(res: ImagePickerResponse) {
    console.log('[result] ', res);
  }

  const [isModalVisible, setIsModalVisible] = React.useState(true);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

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

      <FloatingButton onResult={handleOnResult} />
    </SafeAreaView>
  );
}

const StyledText = styled.Text`
  ${({theme}) => theme.fonts.title_sb_21};
`;

const StyledView = styled.View`
  height: 100%;
  ${({theme}) => theme.mixins.flexBox('column', 'flex-start', 'center')};
  gap: 5px;
`;
