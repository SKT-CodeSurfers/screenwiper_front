import DetailHeader from '@/components/Detail/DetailHeader';
import React, {useEffect} from 'react';
import dummies from '../Result/dummies.json';
import styled from 'styled-components/native';
import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import CustomBottomSheet from '@/components/common/CustomBottomSheet/CustomBottomSheet';
import CustomHeaderContainer from '@/components/common/CustomHeader/CustomHeaderContainer';

const DetailScreen = ({navigation}: StackScreenProps) => {
  const {result} = dummies;
  const data = result[0];

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <DetailHeader />,
    });
  }, [navigation]);

  return (
    <CustomHeaderContainer>
      <StyledImage source={{uri: data.image}} />

      <CustomBottomSheet data={data} />
    </CustomHeaderContainer>
  );
};

export default DetailScreen;

const StyledImage = styled.Image`
  width: 100%;
  height: 50%;
`;
