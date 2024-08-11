import CustomHeaderContainer from '@/components/common/CustomHeader/CustomHeaderContainer';
import ResultHeader from '@/components/Result/ResultHeader';
import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import React, {useEffect} from 'react';
import dummies from './dummies.json';
import styled from 'styled-components/native';
import CustomBottomSheet from '@/components/common/CustomBottomSheet/CustomBottomSheet';

const ResultScreen = ({navigation}: StackScreenProps) => {
  const {result} = dummies;
  const data = result[0];

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <ResultHeader />,
    });
  }, [navigation]);

  return (
    <CustomHeaderContainer>
      <StyledImage source={{uri: data.image}} />

      <CustomBottomSheet data={data} />
    </CustomHeaderContainer>
  );
};

export default ResultScreen;

const StyledImage = styled.Image`
  width: 100%;
  height: 50%;
`;
