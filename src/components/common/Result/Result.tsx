import {
  IResultOther,
  IResultPlace,
  IResultPlan,
} from '@/types/Result/ResultTypes';
import React from 'react';
import styled from 'styled-components/native';
import CustomBottomSheet from '../CustomBottomSheet/CustomBottomSheet';

interface ResultProps {
  data: IResultPlace | IResultPlan | IResultOther;
}
export default function Result({data}: ResultProps) {
  return (
    <StyledResult>
      <StyledImage source={{uri: data.image}} />

      <CustomBottomSheet data={data} />
    </StyledResult>
  );
}

const StyledImage = styled.Image`
  width: 100%;
  height: 50%;
`;

const StyledResult = styled.View`
  flex: 1;
`;
