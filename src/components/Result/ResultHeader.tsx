import React from 'react';
import CustomHeader from '../common/CustomHeader/CustomHeader';
import styled from 'styled-components/native';

interface ResultHeaderProps {
  idx: number;
  total: number;
  goBack: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSave: () => void;
}
export default function ResultHeader({
  idx,
  total,
  goBack,
  onPrev,
  onNext,
  onSave,
}: ResultHeaderProps) {
  function handleOnPrev() {
    if (idx <= 0) {
      goBack();
      return;
    }

    onPrev();
  }
  function handleOnNext() {
    if (idx >= total - 1) {
      onSave();
      return;
    }

    onNext();
  }

  return (
    <CustomHeader>
      <StyledCancelText onPress={handleOnPrev}>이전</StyledCancelText>

      <StyledPageText>
        {idx + 1}/{total}
      </StyledPageText>

      <StyledConfirmText onPress={handleOnNext}>
        {idx >= total - 1 ? '완료' : '다음'}
      </StyledConfirmText>
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
