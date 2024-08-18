import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ArrowLeftIcon from '@/assets/icon/ic_arrow_left.svg';
import ArrowRightIcon from '@/assets/icon/ic_arrow_right.svg';
import RectangleIcon from '@/assets/icon/ic_rectangle.svg';
import * as s from './SettingScreen.style';

export default function SettingsScreen() {
  const navigation = useNavigation();

  const user = {
    name: '데보션',
    email: 'abcd@naver.com',
    profileImage: '',
  };

  const handlePress = (title: string) => {
    console.log(title);
  };

  return (
    <s.Container>
      <s.Header>
        <s.BackButton onPress={() => navigation.goBack()}>
          <ArrowLeftIcon />
        </s.BackButton>
        <s.HeaderText>설정</s.HeaderText>
      </s.Header>

      <s.ProfileSection>
        <s.ProfileImage
          source={user.profileImage ? { uri: user.profileImage } : require('@/assets/default-profile.png')}
        />
        <s.UserInfo>
          <s.UserName>{user.name}</s.UserName>
          <s.UserEmail>{user.email}</s.UserEmail>
        </s.UserInfo>
      </s.ProfileSection>

      <s.OptionsSection>
        {options.map((option) => (
          <s.Option key={option.title} onPress={() => handlePress(option.title)}>
            <s.OptionContent>
              <RectangleIcon />
              <s.OptionText>{option.title}</s.OptionText>
            </s.OptionContent>
            {option.showArrow && <ArrowRightIcon />}
          </s.Option>
        ))}
      </s.OptionsSection>

      <s.Footer>
        <s.VersionText>버전</s.VersionText>
        <s.VersionText>1.0.0</s.VersionText>
      </s.Footer>
    </s.Container>
  );
}

const options = [
  { title: '서비스이용약관', showArrow: true },
  { title: '개인정보처리방침', showArrow: true },
  { title: '로그아웃', showArrow: false },
  { title: '회원탈퇴', showArrow: false },
];
