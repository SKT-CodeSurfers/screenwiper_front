import styled from 'styled-components/native';
import {BottomSheetScrollView} from '@gorhom/bottom-sheet';

const CustomBottomSheetStyles = {
  ScrollView: styled(BottomSheetScrollView)`
    background-color: white;
    padding: 20px;
  `,

  CategoryButton: styled.View`
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
    margin: 17px 0 30px 5px;
  `,

  SubWrapper: styled.View<{isVertical?: boolean}>`
    ${({theme, isVertical}) =>
      isVertical
        ? theme.mixins.flexBox('column', 'center', 'flex-start')
        : theme.mixins.flexBox('row', 'flex-start', 'center')};
    gap: 10px;

    margin-left: 5px;
    margin-bottom: 10px;
  `,

  SubTitle: styled.Text`
    ${({theme}) => theme.fonts.body_b_16};
  `,

  SubContent: styled.Text`
    ${({theme}) => theme.fonts.body_m_16};
    padding-left: 5px;
  `,
};

export default CustomBottomSheetStyles;
