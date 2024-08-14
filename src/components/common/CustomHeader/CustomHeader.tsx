import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface CustomHeaderProps {
  children: React.ReactNode;
}
export default function CustomHeader({children}: CustomHeaderProps) {
  const {top} = useSafeAreaInsets();

  return <StyledHeader top={top}>{children}</StyledHeader>;
}

const StyledHeader = styled.View<{top: number}>`
  background: #fff;
  width: 100%;
  height: ${({top}) => (top ? `${top + 60}px` : '60px')};

  position: absolute;
  top: 0;
  padding-top: ${({top}) => (top ? `${top}px` : 0)};
  left: 0;

  ${({theme}) => theme.mixins.flexBox('row', 'space-between')};
  padding-left: 20px;
  padding-right: 20px;
`;
