import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 16px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BackButton = styled.TouchableOpacity`
  padding-right: 20px;
`;

export const HeaderText = styled.Text`
  ${({ theme }) => theme.fonts.title_b_16};
  color: ${({ theme }) => theme.colors.black};
`;

export const ProfileSection = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

export const ProfileImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const UserInfo = styled.View`
  margin-left: 16px;
`;

export const UserName = styled.Text`
  ${({ theme }) => theme.fonts.body_m_16};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 5px;
`;

export const UserEmail = styled.Text`
  ${({ theme }) => theme.fonts.body_m_13};
  color: ${({ theme }) => theme.colors.black};
`;

export const OptionsSection = styled.View`
  margin-top: 20px;
  margin-horizontal: 20px;
`;

export const Option = styled.TouchableOpacity`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OptionText = styled.Text`
  ${({ theme }) => theme.fonts.body_sb_15};
  color: ${({ theme }) => theme.colors.black};
  margin-left: 10px;
`;

export const Footer = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-horizontal: 20px;
  margin-top: 20px;
`;

export const VersionText = styled.Text`
  ${({ theme }) => theme.fonts.body_sb_15};
  color: ${({ theme }) => theme.colors.black};
`;
