import CustomHeaderContainer from '@/components/common/CustomHeader/CustomHeaderContainer';
import ResultHeader from '@/components/Result/ResultHeader';
import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import React, {useEffect, useMemo, useState} from 'react';
import dummies from './dummies.json';
import Result from '@/components/common/Result/Result';

const ResultScreen = ({navigation}: StackScreenProps) => {
  const {result} = dummies;

  const [idx, setIdx] = useState(0);
  const data = useMemo(() => result[idx], [idx]);

  console.log('>> ', idx);

  function handleOnPrev() {
    setIdx(prev => {
      if (prev <= 0) return 0;
      return prev - 1;
    });
  }
  function handleOnNext() {
    setIdx(prev => {
      if (prev >= result.length - 1) return result.length - 1;
      return prev + 1;
    });
  }

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <ResultHeader
          idx={idx}
          total={result.length}
          onPrev={handleOnPrev}
          onNext={handleOnNext}
        />
      ),
    });
  }, [navigation, idx]);

  return (
    <CustomHeaderContainer>
      {/* <Swiper style={{flex: 1}} autoplay horizontal={true} showsButtons={true}>
        <Result data={result[0]} />
        <Result data={result[1]} />
        <Result data={result[2]} />
      </Swiper> */}

      <Result data={data} />
    </CustomHeaderContainer>
  );
};

export default ResultScreen;
