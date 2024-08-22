import { useMutation } from '@tanstack/react-query';
import { DELETE } from '@/api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import useNavigator from '@/navigators/useNavigator';

export const useDeleteMember = () => {
  const { stackNavigation } = useNavigator();

  const deleteMyAccount = async (): Promise<string> => {
    const response = await DELETE<string>('/api/members/me', {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    if (response.status !== 200) {
      throw new Error(response.data.message || '탈퇴에 실패했습니다.');
    }

    return response.data.result;
  };

  return useMutation<string, Error>({
    mutationFn: deleteMyAccount,
    onSuccess: async () => {
      //await AsyncStorage.clear();
      Alert.alert('회원 탈퇴가 완료되었습니다.');
      stackNavigation.navigate('Main');
    },
    onError: (error) => {
      console.log('회원 탈퇴 에러:', error);
      Alert.alert('회원 탈퇴에 실패했습니다.', error.message);    
    },
  });
};
