import React from 'react';
import CustomHeader from '../common/CustomHeader/CustomHeader';
import styled from 'styled-components/native';

interface ResultHeaderProps {
  idx: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}
export default function ResultHeader({
  idx,
  total,
  onPrev,
  onNext,
}: ResultHeaderProps) {
  return (
    <CustomHeader>
      <StyledCancelText onPress={onPrev}>이전</StyledCancelText>
      <StyledPageText>
        {idx + 1}/{total}
      </StyledPageText>
      <StyledConfirmText onPress={onNext}>다음</StyledConfirmText>
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
