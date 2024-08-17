import { useMutation } from '@tanstack/react-query';
import { GET } from '@/api/client';

const fetchKakaoCallback = async (code: string): Promise<string> => {
  const response = await GET<string>(`/api/callback?code=${code}`);
  return response.data;
};

export const useKakaoCallback = () => {
  return useMutation<string, Error, string>({
    mutationFn: fetchKakaoCallback,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error('Error during callback processing:', error);
    },
  });
};
