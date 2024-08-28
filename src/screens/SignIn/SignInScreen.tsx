import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '@/assets/logo.svg';
import IcKakao from '@/assets/icon/ic_kakao_talk.svg';
import styles from './SignInScreen.styles';
import useNavigator from '@/navigators/useNavigator';
import { useKakaoLoginUrl } from '@/hooks/queries/users/useKakaoLogin';

const SignInScreen = () => {
  const { stackNavigation } = useNavigator();
  const { data: loginUrl, isLoading, isError } = useKakaoLoginUrl();

  const handleLogin = () => {
    console.log('Login url : ' + loginUrl);
    if (loginUrl) {
      stackNavigation.navigate('WebView', { url: loginUrl });
    }
  };

  return (
    <LinearGradient
      colors={['#21DFFF', '#6A52FE', '#9C01FF']}
      locations={[0, 0.6, 0.9]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}>
      <View style={styles.overlay}>
        <Logo width={165} height={135} style={styles.logo} />
        <Text style={styles.title}>스크린샷 관리를 효율적으로</Text>
        <Text style={styles.subtitle}>오늘은 어떤 사진을 정리하셨나요?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}>
            <IcKakao width={24} height={24} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>카카오로 시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignInScreen;
