import CustomHeaderContainer from '@/components/common/CustomHeader/CustomHeaderContainer';
import ResultHeader from '@/components/Result/ResultHeader';
import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import React, {useEffect, useMemo, useState} from 'react';
import dummies from './dummies.json';
import Result from '@/components/common/Result/Result';
import {Alert} from 'react-native';

const ResultScreen = ({navigation}: StackScreenProps<'Result'>) => {
  const {result} = dummies;

  const [idx, setIdx] = useState(0);
  const data = useMemo(() => result[idx], [idx]);

  function handleGoBack() {
    Alert.alert(
      '수정을 종료하시겠습니까?',
      '수정한 내용은 반영되지 않습니다.',
      [
        {
          text: '아니요',
          onPress: () => console.log('아니라는데'),
          style: 'cancel',
        },
        {text: '네', onPress: () => navigation.pop()},
      ],
    );
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
  function handleOnSave() {
    Alert.alert('Save!');
  }

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <ResultHeader
          idx={idx}
          total={result.length}
          goBack={handleGoBack}
          onPrev={handleOnPrev}
          onNext={handleOnNext}
          onSave={handleOnSave}
        />
      ),
    });
  }, [navigation, idx]);

  return (
    <>
      <CustomHeaderContainer>
        {/* <Swiper style={{flex: 1}} autoplay horizontal={true} showsButtons={true}>
        <Result data={result[0]} />
        <Result data={result[1]} />
        <Result data={result[2]} />
      </Swiper> */}

        <Result data={data} />
      </CustomHeaderContainer>
    </>
  );
};

export default ResultScreen;
