import React from 'react';
import CustomHeader from '../common/CustomHeader/CustomHeader';
import styled from 'styled-components/native';
interface DetailHeaderProps {
  goBack: () => void;
}
export default function DetailHeader({goBack}: DetailHeaderProps) {
  return (
    <CustomHeader>
      <StyledCancelText onPress={goBack}>이전</StyledCancelText>
      {/* <StyledConfirmText>삭제</StyledConfirmText> */}
    </CustomHeader>
  );
}

const StyledCancelText = styled.Text`
  ${({theme}) => theme.fonts.body_m_16};
`;
const StyledConfirmText = styled.Text`
  ${({theme}) => theme.fonts.body_b_16};
`;
const StyledPageText = styled.Text`
  ${({theme}) => theme.fonts.body_m_15};
  color: ${({theme}) => theme.colors.gray5};
`;
