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
};

export default CustomModalStyles;
