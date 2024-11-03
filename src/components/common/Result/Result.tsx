import {ResultTypes} from '@/types/Result/ResultTypes';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import CustomBottomSheet from '../CustomBottomSheet/CustomBottomSheet';
import {Alert} from 'react-native';
import CategoryModal from '../Modal/CategoryModal/CategoryModal';

interface ResultProps {
  data: ResultTypes;
}
export default function Result({data}: ResultProps) {
  const [visible, setVisible] = useState(false);
  function handleOnSumbit(key: string) {
    Alert.alert(key);
  }

  return (
    <StyledResult>
      <StyledImage source={{uri: data.photoUrl}} />
      <CustomBottomSheet data={data} modify={() => setVisible(true)} />

      {/* 카테고리 수정 모달 */}
      <CategoryModal
        visible={visible}
        onClose={() => setVisible(false)}
        onSumbit={handleOnSumbit}
      />
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
