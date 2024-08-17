import React from 'react';
import { WebView } from 'react-native-webview';
import useNavigator from '@/navigators/useNavigator';
import { Text, View, ActivityIndicator } from 'react-native';

const WebviewScreen: React.FC = () => {
  const { stackNavigation } = useNavigator();
  const { url } = stackNavigation.getState().routes.find(route => route.name === 'WebView')?.params ?? {};

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

  const onShouldStartLoadWithRequest = (request: any) => {
    const { url } = request;

    if (url.includes('http://43.201.193.38:8080/callback')) {
      const code = getQueryParam(url, 'code');
      if (code) {
        fetch(`http://43.201.193.38:8080/api/callback?code=${code}`)
          .then(response => response.text())
          .then(data => {
            console.log(data);
            stackNavigation.navigate('Main');
          })
          .catch(error => console.error('Error during callback processing:', error));

        return false;
      }
    }

    return true;
  };

  if (!url) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <WebView
      source={{ uri: url }}
      style={{ flex: 1 }}
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      startInLoadingState={true}
      renderLoading={() => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        </View>
      )}
    />
  );
};

export default WebviewScreen;
