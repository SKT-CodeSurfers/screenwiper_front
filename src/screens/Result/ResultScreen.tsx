import CustomHeaderContainer from '@/components/common/CustomHeader/CustomHeaderContainer';
import ResultHeader from '@/components/Result/ResultHeader';
import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import React, {useEffect, useMemo, useState} from 'react';
import dummies from './dummies.json';
import Result from '@/components/common/Result/Result';
import {Alert} from 'react-native';
import {useQueryClient} from '@tanstack/react-query';
import {PHOTOS_KEYS} from '@/hooks/queries/QueryKeys';

const ResultScreen = ({navigation, route}: StackScreenProps<'Result'>) => {
  // const {result} = dummies;
  const {list} = route.params;

  const [idx, setIdx] = useState(0);
  // const data = useMemo(() => result[idx], [idx]);

  const queryClient = useQueryClient();
  function handleGoBack() {
    queryClient.invalidateQueries({queryKey: PHOTOS_KEYS.lists()});
    navigation.pop();
  }
  function handleOnPrev() {
    setIdx(prev => {
      return prev - 1;
    });
  }

  function handleOnNext() {
    setIdx(prev => {
      return prev + 1;
    });
  }

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <ResultHeader
          idx={idx}
          total={list.length}
          goBack={handleGoBack}
          onPrev={handleOnPrev}
          onNext={handleOnNext}
        />
      ),
    });
  }, [navigation, idx]);

  return (
    <>
      <CustomHeaderContainer>
        <Result data={list[idx]} />
      </CustomHeaderContainer>
    </>
  );
};

export default ResultScreen;
