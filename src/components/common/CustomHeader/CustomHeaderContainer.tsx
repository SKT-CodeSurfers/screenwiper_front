import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface CustomHeaderContainerProps {
  children: React.ReactNode;
  headerHeight?: number;
}

const CustomHeaderContainer = ({
  children,
  headerHeight = 60, // 기본 헤더 높이
}: CustomHeaderContainerProps) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <Container marginTop={top + headerHeight} paddingBottom={bottom}>
      {children}
    </Container>
  );
};

export default CustomHeaderContainer;

const Container = styled.SafeAreaView<{
  marginTop: number;
  paddingBottom: number;
}>`
  flex: 1;
  margin-top: ${({marginTop}) => `${marginTop}px`};
  padding-bottom: ${({paddingBottom}) => `${paddingBottom}px`};
  position: relative;
`;
