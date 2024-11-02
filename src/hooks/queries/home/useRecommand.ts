import { GET } from '@/api/client';
import { useQuery } from '@tanstack/react-query';
import { USER_KEY } from '../QueryKeys';

export interface RecommandData {
  date: string;
  summary: string | null;
  address: string | null;
  category_name: string;
  photo_id: number;
  photo_name: string;
  operating_hours: string | null;
  photo_url: string;
  title: string;
}

export interface GetRecommandResponse {
  [key: string]: RecommandData;
}

export const getRecommands = async () => {
  const res = await GET<GetRecommandResponse>('/recommend/random');
  console.log('>>', res.data);

  // 객체를 배열 형태로 변환하여 반환
  return Object.values(res.data);
};

/**
 * 카테고리별 데이터 조회 API
 */
export const useGetRecommand = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [USER_KEY, 'categories'],
    queryFn: getRecommands,  // 함수 참조가 아닌, 직접 호출 방식으로 변경
  });

  return { data, isLoading, isError, refetch };
};
