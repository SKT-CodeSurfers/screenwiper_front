import { useMutation } from '@tanstack/react-query';
import { GETuser } from '@/api/client';

interface KakaoCallbackResponse {
  accessToken: string;
  memberName: string;
}

const fetchKakaoCallback = async (code: string): Promise<KakaoCallbackResponse> => {
  const response = await GETuser<KakaoCallbackResponse>(`/api/callback?code=${code}`);
  return response.data;
};

export const useKakaoCallback = () => {
  return useMutation<KakaoCallbackResponse, Error, string>({
    mutationFn: fetchKakaoCallback,
    onSuccess: (data) => {

      console.log(data);
      console.log("AccessToken:", data.accessToken);
      console.log("Logged in as:", data.memberName);
    },
    onError: (error) => {
      console.error('Error during callback processing:', error);
    },
  });
};
