import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

const CustomModalStyles = {
  ModalOverlay: styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
  `,

  ModalContainer: styled.View`
    background-color: white;
    border-radius: 25px;
    padding: 40px 30px;
    ${({theme}) => theme.mixins.flexBox('column')};
  `,

  Title: styled.Text`
    width: 100%;
    text-align: start;
    margin-bottom: 10px;
    ${({theme}) => theme.fonts.modal_title};
  `,

  Subtitle: styled.Text`
    width: 100%;
    text-align: start;
    margin-bottom: 20px;
    ${({theme}) => theme.fonts.modal_subtitle};
  `,

  OptionsContainer: styled.View`
    width: 100%;
    margin-bottom: 30px;
  `,

  OptionRow: styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 35px;
  `,

  Checkbox: styled.View<{selected?: boolean}>`
    width: 25px;
    height: 25px;
    border-width: 0.5px;
    border-color: rgb(217, 217, 217);
    border-radius: 3px;
    margin-right: 15px;
    background-color: ${({selected}) =>
      selected ? 'rgb(66, 120, 255)' : 'transparent'};
  `,

  OptionText: styled.Text`
    ${({theme}) => theme.fonts.modal_option};
  `,

  Button: styled(TouchableOpacity)`
    width: 294px;
    height: 53px;
    background-color: rgb(217, 217, 217);
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  `,

  ButtonText: styled.Text`
    font-size: 14px;
    font-weight: 700;
    color: white;
  `,
};

export default CustomModalStyles;
