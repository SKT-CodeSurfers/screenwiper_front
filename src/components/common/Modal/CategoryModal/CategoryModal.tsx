import React, {useState} from 'react';
import CustomModal from '../CustomModal/CustomModal';
import s from './CategoryModal.styles';
import {IcRadioChecked, IcRadioUnchecked} from '@/assets/icon';
import {TouchableOpacity} from 'react-native-gesture-handler';

enum Options {
  PLACE = '장소',
  PLAN = '일정',
  OTHER = '기타',
}
const options: string[] = Object.values(Options);

interface CategoryModalProps {
  visible: boolean;
  onClose: () => void;
  onSumbit: (category: string) => void;
}
export default function CategoryModal({
  visible,
  onClose,
  onSumbit,
}: CategoryModalProps) {
  const [selected, setSeleted] = useState<number | null>(null);

  function handleOnSelect(idx: number) {
    if (selected === idx) setSeleted(null);
    else setSeleted(idx);
  }

  function handleOnSumbit() {
    if (selected === null) return;

    const selectedValue = options[selected];
    const selectedKey = Object.keys(Options).find(
      key => Options[key as keyof typeof Options] === selectedValue,
    );

    if (selectedKey) {
      onSumbit(selectedKey);
    }
  }

  return (
    <CustomModal visible={visible} onClose={onClose}>
      <s.Title>변경할 카테고리를 선택해주세요</s.Title>
      <s.Subtitle>카테고리 변경 시, 분석 시간이 소요돼요</s.Subtitle>

      <s.OptionsContainer>
        {options.map((opt, idx) => (
          <TouchableOpacity key={idx} onPress={() => handleOnSelect(idx)}>
            <s.OptionRow>
              {selected === idx ? <IcRadioChecked /> : <IcRadioUnchecked />}
              <s.OptionText>{opt}</s.OptionText>
            </s.OptionRow>
          </TouchableOpacity>
        ))}
      </s.OptionsContainer>

      <s.Button enable={selected !== null} onPress={handleOnSumbit}>
        <s.ButtonText>변경하기</s.ButtonText>
      </s.Button>
    </CustomModal>
  );
}
