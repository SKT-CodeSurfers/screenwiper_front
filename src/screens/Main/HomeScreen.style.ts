
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const StyledScrollView = styled.ScrollView`
  flex: 1;
  background-color: #FFF;
`;

export const TopText = styled.Text`
  ${({ theme }) => theme.fonts.title_sb_21};
  color: ${({ theme }) => theme.colors.white};
`;

export const WhiteText = styled.Text`
  ${({ theme }) => theme.fonts.body_sb_17};
  color: ${({ theme }) => theme.colors.white};
`;

export const GrayText = styled.Text`
  ${({ theme }) => theme.fonts.body_m_15};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.6;
`;

export const TopContainer = styled.View`
  width: 100%;
  background-color: #758CF7;
  padding: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const SettingButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 30px;
  margin-top: -30px;
`;

export const SectionTitle = styled.Text`
  ${({ theme }) => theme.fonts.title_b_18};
  color: ${({ theme }) => theme.colors.black};
  margin-vertical: 10px;
`;

export const CardWrapper = styled.View`
  width: ${screenWidth * 0.85}px;
`;

export const ShadowContainer = styled.View`
  margin-bottom: 20px;
`;
