import { GET } from '@/api/client';
import { useQuery } from '@tanstack/react-query';

interface MemberInfoResponse {
  name: string;
}

const fetchMemberInfo = async (): Promise<MemberInfoResponse> => {
  const response = await GET<string>('/api/member-info', {
    withCredentials: true,
  });

  const responseData = response.data;

  const nameMatch = responseData.match(/Logged in as: (.+)/);
  const name = nameMatch ? nameMatch[1] : '사용자';

  return { name };
};

export const useMemberInfo = () => {
  return useQuery<MemberInfoResponse, Error>({
    queryKey: ['memberInfo'], 
    queryFn: fetchMemberInfo,
    retry: 1,
  });
};
