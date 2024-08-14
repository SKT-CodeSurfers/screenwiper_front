import React, {useState} from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import s from './CustomModal.styles';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export default function CustomModal({
  visible,
  onClose,
  children,
}: CustomModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={1}
        onPressOut={onClose}>
        <s.ModalOverlay>
          {/* 모달 내부를 클릭해도 닫히지 않도록 막기 */}
          <TouchableOpacity activeOpacity={1} onPress={() => {}}>
            <s.ModalContainer>{children}</s.ModalContainer>
          </TouchableOpacity>
        </s.ModalOverlay>
      </TouchableOpacity>
    </Modal>
  );
}
