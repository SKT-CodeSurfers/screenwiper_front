import React from 'react';
import {WebView, WebViewNavigation} from 'react-native-webview';
import {Text, View, ActivityIndicator, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  StackParamList,
  StackMenu,
} from '@/navigators/StackNavigator/StackNavigator';
import {useKakaoLoginCallback} from '@/hooks/mutations/users/useKakaoLoginCallback';

type WebviewScreenProps = NativeStackScreenProps<
  StackParamList,
  StackMenu.WebView
>;

const WebviewScreen: React.FC<WebviewScreenProps> = ({navigation, route}) => {
  const {url} = route.params;
  const {mutate: kakaoCallback, isError} = useKakaoLoginCallback({
    async onSuccess(data) {
      console.log('AccessToken:', data);
      await AsyncStorage.setItem('accessToken', data.accessToken);

      navigation.reset({
        index: 0,
        routes: [{name: StackMenu.Main}],
      });
    },
    onError(e) {
      console.error('Error during callback processing:', e);
    },
  });

  const getQueryParam = (url: string, param: string): string | null => {
    const queryString = url.split('?')[1];
    if (!queryString) {
      return null;
    }

    const params = queryString.split('&');
    for (const paramPair of params) {
      const [key, value] = paramPair.split('=');
      if (key === param) {
        return decodeURIComponent(value);
      }
    }

    return null;
  };

  /**
   * 웹뷰로 보내는 요청을 가로채서 callback 전송
   */
  const onShouldStartLoadWithRequest = (request: WebViewNavigation) => {
    const {url} = request;

    console.log('>>url', url);
    if (url.includes('http://3.34.88.174:8080/api/auth/kakao/callback')) {
      const code = getQueryParam(url, 'code');
      if (code) {
        kakaoCallback({authorizationCode: code});
        return false;
      }
    }

    return true;
  };

  // 웹뷰 로딩 중 네트워크 오류 처리
  const handleWebViewError = (syntheticEvent: any) => {
    const {nativeEvent} = syntheticEvent;
    Alert.alert(
      '웹페이지 오류',
      `페이지를 로드하는 중 오류가 발생했습니다: ${nativeEvent.description}`,
    );
  };

  // HTTP 오류 처리 (예: 404, 500 등)
  const handleHttpError = (syntheticEvent: any) => {
    const {nativeEvent} = syntheticEvent;
    Alert.alert('HTTP 오류', `HTTP 오류 발생: ${nativeEvent.statusCode}`);
  };

  if (!url) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <WebView
      source={{uri: url}}
      style={{flex: 1}}
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      onError={handleWebViewError} // 네트워크 오류 핸들러
      onHttpError={handleHttpError} // HTTP 오류 핸들러
      startInLoadingState={true}
      renderLoading={() => (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    />
  );
};

export default WebviewScreen;
