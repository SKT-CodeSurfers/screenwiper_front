import React from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ArrowLeftIcon from '@/assets/icon/ic_arrow_left.svg';
import ArrowRightIcon from '@/assets/icon/ic_arrow_right.svg';
import RectangleIcon from '@/assets/icon/ic_rectangle.svg';
import * as s from './SettingScreen.style';
import {useDeleteMember} from '@/hooks/queries/users/useDeleteMember';
import useNavigator from '@/navigators/useNavigator';
import {StackMenu} from '@/navigators/StackNavigator/StackNavigator';
import {useGetUser} from '@/hooks/queries/users/useGetUser';

export default function SettingsScreen() {
  const {stackNavigation} = useNavigator();
  const {mutate: deleteMember} = useDeleteMember();
  const {data: user} = useGetUser();

  const handlePress = (title: string) => {
    if (title === '회원탈퇴') {
      handleDeleteAccount();
    } else if (title === '로그아웃') {
      handleLogout();
    } else {
      console.log(title);
    }
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      '회원 탈퇴',
      '정말로 회원 탈퇴를 하시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '확인',
          onPress: () => deleteMember(),
        },
      ],
      {cancelable: false},
    );
  };

  const handleLogout = () => {
    Alert.alert(
      '로그아웃',
      '정말로 로그아웃 하시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '확인',
          onPress: async () => {
            await AsyncStorage.removeItem('accessToken');
            stackNavigation.reset({
              index: 0,
              routes: [{name: StackMenu.SignIn}],
            });
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <s.Container>
      <s.Header>
        <s.BackButton onPress={() => stackNavigation.goBack()}>
          <ArrowLeftIcon />
        </s.BackButton>
        <s.HeaderText>설정</s.HeaderText>
      </s.Header>

      <s.ProfileSection>
        <s.ProfileImage source={require('@/assets/default-profile.png')} />
        <s.UserInfo>
          <s.UserName>{user?.nickname}</s.UserName>
          <s.UserEmail>{user?.email}</s.UserEmail>
        </s.UserInfo>
      </s.ProfileSection>

      <s.OptionsSection>
        {options.map(option => (
          <s.Option
            key={option.title}
            onPress={() => handlePress(option.title)}>
            <s.OptionContent>
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
  {title: '서비스이용약관', showArrow: true},
  {title: '개인정보처리방침', showArrow: true},
  {title: '로그아웃', showArrow: false},
  {title: '회원탈퇴', showArrow: false},
];
