import DetailHeader from '@/components/Detail/DetailHeader';
import React, {useEffect} from 'react';
import dummies from '../Result/dummies.json';
import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import CustomHeaderContainer from '@/components/common/CustomHeader/CustomHeaderContainer';
import Result from '@/components/common/Result/Result';

const DetailScreen = ({navigation}: StackScreenProps<'Detail'>) => {
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
      <Result data={data} />
    </CustomHeaderContainer>
  );
};

export default DetailScreen;
