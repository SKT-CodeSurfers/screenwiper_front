import styled from 'styled-components/native';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';

const CustomBottomSheetStyles = {
  ScrollView: styled(BottomSheetScrollView)`
    background-color: white;
    padding: 20px;
  `,

  CategoryButton: styled.TouchableOpacity`
    width: 80px;
    padding: 8px 20px;
    border-radius: 20px;
    background: #4277ff;
    ${({theme}) => theme.mixins.flexBox()};
    gap: 5px;
  `,

  CategoryText: styled.Text`
    ${({theme}) => theme.fonts.body_b_16};
    color: ${({theme}) => theme.colors.white};
  `,

  Title: styled.Text`
    ${({theme}) => theme.fonts.title_eb_21};
    margin: 17px 0;
  `,

  SubTitle: styled.Text`
    ${({theme}) => theme.fonts.body_b_16};
    margin-bottom: 10px;
  `,

  SubContent: styled.Text`
    ${({theme}) => theme.fonts.body_m_16};
  `,
};

export default CustomBottomSheetStyles;
