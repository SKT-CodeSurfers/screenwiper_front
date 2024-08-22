import { GETuser } from '@/api/client';
import { useQuery } from '@tanstack/react-query';

interface MemberInfoResponse {
  name: string;
}

const fetchMemberInfo = async (): Promise<MemberInfoResponse> => {
  try {
    const response = await GETuser<string>('api/member-info', {
      withCredentials: true,
    });
    const responseData = response.data;
    console.log('res' + responseData);

    const nameMatch = responseData.match(/Logged in as: (.+)/);
    const name = nameMatch ? nameMatch[1] : '사용자';

    return { name };
  } catch (error) {
    console.error('Error fetching member info:', error);
    throw error;
  }
};


export const useMemberInfo = () => {
  return useQuery<MemberInfoResponse, Error>({
    queryKey: ['memberInfo'], 
    queryFn: fetchMemberInfo,
    retry: 1,
  });
};
