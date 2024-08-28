import { GETuser } from '@/api/client';
import { useQuery } from '@tanstack/react-query';
import { LOGIN_KEYS } from '../QueryKeys';

export const fetchKakaoLoginUrl = async (): Promise<string> => {
  try {
    const res = await GETuser<string>('/login-url');
    return res.data;
  } catch (error) {
    console.error('Error fetching login URL:', error);
    throw error;
  }
};

export const useKakaoLoginUrl = () => {
  const QUERY_KEY = LOGIN_KEYS.loginUrl();

  const { data, isLoading, isError, refetch } = useQuery<string>({
    queryKey: QUERY_KEY,
    queryFn: fetchKakaoLoginUrl,
  });

  console.log('useQuery data:', data);

  return { data, isLoading, isError, refetch };
};
