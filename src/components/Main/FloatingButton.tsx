import React from 'react';
import {IcUpload} from '@/assets/icon';
import styled from 'styled-components/native';
import {
  Asset,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {usePostPhotos} from '@/hooks/mutations/photos/usePostPhotos';
import useNavigator from '@/navigators/useNavigator';

interface FloatingButtonProps {
  onResult: (response: Asset[]) => void;
}
export default function FloatingButton({onResult}: FloatingButtonProps) {
  const {stackNavigation} = useNavigator();

  async function openGallery() {
    const {didCancel, errorCode, errorMessage, assets} =
      await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 10,
      });
    console.log('>> ', assets);

    if (!assets) {
      console.log(
        `didCancel: ${didCancel} errorCode: ${errorCode} errorMessage: ${errorMessage}`,
      );
      return;
    }

    const formData = new FormData();
    formData.append('memberId', '10000');

    for (let i = 0; i < assets.length; i++) {
      const asset = assets[i];

      const photo = {
        uri: asset.uri,
        type: 'multipart/form-data',
        name: `${asset.fileName}`,
      };

      formData.append(`files`, photo);
    }

    stackNavigation.navigate('Loading', {formData: formData});
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
  bottom: 30px;
  right: 30px;
`;
