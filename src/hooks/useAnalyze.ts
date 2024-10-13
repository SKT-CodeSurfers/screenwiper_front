import useNavigator from '@/navigators/useNavigator';
import {launchImageLibrary} from 'react-native-image-picker';
import {ShareData} from 'react-native-share-menu';

export default function useAnalyze() {
  const {stackNavigation} = useNavigator();

  const handleGoToGallery = async () => {
    const {didCancel, errorCode, errorMessage, assets} =
      await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 5,
      });

    if (didCancel || errorCode) {
      console.log(
        `didCancel: ${didCancel} errorCode: ${errorCode} errorMessage: ${errorMessage}`,
      );
    }

    const formData = new FormData();
    formData.append('memberId', '10000'); // [TODO] token 추가되면 제거

    if (assets) {
      for (let i = 0; i < assets.length; i++) {
        const asset = assets[i];

        const photo = {
          uri: asset.uri,
          type: 'multipart/form-data',
          name: `${asset.fileName}`,
        };

        formData.append(`files`, photo);
      }

      console.log('[handleGoToGallery] FormData ', formData);
      stackNavigation.navigate('Loading', {formData: formData});
    }
  };

  const handleShareExtension = (item: ShareData) => {
    const formData = new FormData();
    formData.append('memberId', '10000'); // [TODO] token 추가되면 제거

    if (item?.data?.length === 1) {
      const imagePath = item.data[0].data;
      const fileName = imagePath.split('/').pop();

      const photo = {
        uri: imagePath,
        type: 'multipart/form-data',
        name: `${fileName}`,
      };

      formData.append(`files`, photo);

      console.log('[handleShareExtension] FormData ', formData);
      stackNavigation.navigate('Loading', {formData: formData});
    }
  };

  return {handleGoToGallery, handleShareExtension};
}
