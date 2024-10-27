import {GET} from '@/api/client';
import {useQuery} from '@tanstack/react-query';
import {USER_KEY} from '../QueryKeys';

export interface GetUserResponse {
  id: number;
  nickname: string;
  email: string;
}

export const getUserInfo = async () => {
  const res = await GET<GetUserResponse[]>(`/members/me`);
  console.log('>>', res.data);
  return res.data.data[0];
};

/**
 *  유저 정보 조회 API
 */
export const useGetUser = () => {
  const QUERY_KEY = USER_KEY;

  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => getUserInfo().then(res => res),
  });

  return {data, isLoading, isError, refetch};
};
