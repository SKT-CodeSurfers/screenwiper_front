import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

const CategoryModalStyles = {
  Title: styled.Text`
    width: 100%;
    text-align: start;
    margin-bottom: 10px;
    ${({theme}) => theme.fonts.modal_title};
  `,

  Subtitle: styled.Text`
    width: 100%;
    text-align: start;
    ${({theme}) => theme.fonts.modal_subtitle};
  `,

  OptionsContainer: styled.View`
    width: 100%;
    margin: 30px 0;
  `,

  OptionRow: styled.View`
    margin-bottom: 35px;

    ${({theme}) => theme.mixins.flexBox('row', 'flex-start')};
    gap: 10px;
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

  Button: styled(TouchableOpacity)<{enable?: boolean}>`
    width: 100%;
    padding: 18px 100px;

    ${({theme}) => theme.mixins.flexBox()};

    background-color: ${({theme, enable}) =>
      enable ? theme.colors.primary : theme.colors.gray3};
    border-radius: 10px;
  `,

  ButtonText: styled.Text`
    font-size: 14px;
    font-weight: 700;
    color: white;
  `,
};

export default CategoryModalStyles;
