import CustomHeaderContainer from '@/components/common/CustomHeader/CustomHeaderContainer';
import ResultHeader from '@/components/Result/ResultHeader';
import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import React, {useEffect} from 'react';
import dummies from './dummies.json';
import Result from '@/components/common/Result/Result';

const ResultScreen = ({navigation}: StackScreenProps) => {
  const {result} = dummies;
  const data = result[2];

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <ResultHeader />,
    });
  }, [navigation]);

  return (
    <CustomHeaderContainer>
      <Result data={data} />
    </CustomHeaderContainer>
  );
};

export default ResultScreen;
