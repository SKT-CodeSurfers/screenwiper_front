import CustomHeaderContainer from '@/components/common/CustomHeader/CustomHeaderContainer';
import ResultHeader from '@/components/Result/ResultHeader';
import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import React, {useEffect} from 'react';
import {ScrollView, Text} from 'react-native';

const ResultScreen = ({navigation}: StackScreenProps) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <ResultHeader />,
    });
  }, [navigation]);

  return (
    <CustomHeaderContainer>
      <ScrollView>
        <Text>1ResultScreen</Text>
        <Text>ResultScreen</Text>
        <Text>ResultScreen</Text>
        <Text>ResultScreen</Text>
        <Text>ResultScreen</Text>
        <Text>ResultScreen</Text>

        <Text>ResultScreen</Text>
        <Text>ResultScreen</Text>
        <Text>ResultScreen</Text>
      </ScrollView>
    </CustomHeaderContainer>
  );
};

export default ResultScreen;
