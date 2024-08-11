import React from 'react';
import {IcUpload} from '@/assets/icon';
import styled from 'styled-components/native';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';

interface FloatingButtonProps {
  onResult: (response: ImagePickerResponse) => void;
}
export default function FloatingButton({onResult}: FloatingButtonProps) {
  async function openGallery() {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 10,
    });
    console.log('>> ', result);

    onResult(result);
  }

  return (
    <StyledFloatingButton onPress={openGallery}>
      <IcUpload />
    </StyledFloatingButton>
  );
}

const StyledFloatingButton = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  background: #4277ff;
  filter: drop-shadow(0px 4px 40px rgba(183, 203, 255, 0.2));
  border-radius: 50px;

  ${({theme}) => theme.mixins.flexBox()};

  position: absolute;
  bottom: 0;
  right: 30px;
`;
