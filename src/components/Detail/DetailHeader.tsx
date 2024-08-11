import React from 'react';
import CustomHeader from '../common/CustomHeader/CustomHeader';
import styled from 'styled-components/native';

export default function DetailHeader() {
  return (
    <CustomHeader>
      <StyledCancelText>이전</StyledCancelText>
      <StyledConfirmText>저장</StyledConfirmText>
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
