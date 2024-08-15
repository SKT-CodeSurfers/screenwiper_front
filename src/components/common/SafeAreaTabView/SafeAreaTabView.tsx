import React from 'react';
import styled from 'styled-components/native';

// ios safe area bottom으로 인해 바텀내비 위에 공간 생기는 이슈
interface SafeAreaTabViewProps {
  children: React.ReactNode;
}
export default function SafeAreaTabView({children}: SafeAreaTabViewProps) {
  return <StyledSafeView style={{flex: 1}}>{children}</StyledSafeView>;
}

const StyledSafeView = styled.SafeAreaView`
  flex: 1;
`;
