import React from 'react';
import CustomHeader from '../common/CustomHeader';
import styled from 'styled-components/native';

export default function ResultHeader() {
  return (
    <CustomHeader>
      <StyledCancelText>이전</StyledCancelText>
      <StyledPageText>1/3</StyledPageText>
      <StyledConfirmText>다음</StyledConfirmText>
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
