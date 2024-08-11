import React, {useState} from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import s from './CustomModal.styles';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
}
export default function CustomModal() {
  const [visible, setVisible] = useState(true);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={1}
        onPressOut={() => setVisible(false)}>
        <s.ModalOverlay>
          {/* 모달 내부를 클릭해도 닫히지 않도록 막기 */}
          <TouchableOpacity activeOpacity={1} onPress={() => {}}>
            <s.ModalContainer>
              <s.Title>변경할 카테고리를 선택해주세요</s.Title>
              <s.Subtitle>카테고리 변경 시, 분석 시간이 소요돼요</s.Subtitle>

              <s.OptionsContainer>
                <s.OptionRow>
                  <s.Checkbox />
                  <s.OptionText>장소</s.OptionText>
                </s.OptionRow>
                <s.OptionRow>
                  <s.Checkbox selected />
                  <s.OptionText>일정</s.OptionText>
                </s.OptionRow>
                <s.OptionRow>
                  <s.Checkbox />
                  <s.OptionText>기타</s.OptionText>
                </s.OptionRow>
              </s.OptionsContainer>

              <s.Button>
                <s.ButtonText>변경하기</s.ButtonText>
              </s.Button>
            </s.ModalContainer>
          </TouchableOpacity>
        </s.ModalOverlay>
      </TouchableOpacity>
    </Modal>
  );
}
