import CustomHeaderContainer from '@/components/common/CustomHeader/CustomHeaderContainer';
import ResultHeader from '@/components/Result/ResultHeader';
import {StackScreenProps} from '@/navigators/StackNavigator/StackNavigator';
import React, {useEffect, useMemo, useState} from 'react';
import dummies from './dummies.json';
import Result from '@/components/common/Result/Result';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';
import CustomModal from '@/components/common/CustomModal/CustomModal';

const ResultScreen = ({navigation}: StackScreenProps) => {
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

  const [isModalVisible, setIsModalVisible] = React.useState(true);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <>
      <CustomHeaderContainer>
        {/* <Swiper style={{flex: 1}} autoplay horizontal={true} showsButtons={true}>
        <Result data={result[0]} />
        <Result data={result[1]} />
        <Result data={result[2]} />
      </Swiper> */}

        <Result data={data} />
        <CustomModal />
      </CustomHeaderContainer>
    </>
  );
};

export default ResultScreen;

const StyledModalWrapper = styled.View`
  flex: 1;
  background: #000;
  opacity: 0.3;
  position: abosolute;
  top: 0;
  left: 0;
`;

const StyledModalContent = styled.View`
  width: 80%;
  background: #fff;
  margin-top: 230px;
`;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#17191c',
  },

  /**
   * 일반 화면 영역
   */
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 400,
  },

  /**
   * 모달 화면 영역
   */
  modalView: {
    marginTop: 320,
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    color: '#17191c',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
});
