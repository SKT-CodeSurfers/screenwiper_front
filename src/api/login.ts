import { GET } from '@/api/client';

export const fetchKakaoLoginUrl = async () => {
  return GET<string>('/api/login-url');
};

export const fetchKakaoCallback = async (code: string) => {
  return GET<string>(`/api/callback?code=${code}`);
};

export const fetchMemberInfo = async () => {
  return GET<string>('/api/member-info');
};


