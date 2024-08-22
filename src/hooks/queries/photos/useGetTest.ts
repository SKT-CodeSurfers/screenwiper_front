import {GET} from '@/api/client';
import {useQuery} from '@tanstack/react-query';
import {PHOTOS_KEYS} from '../QueryKeys';

/**
 *  스크린샷 상세 조회 API
 */
export const getPhoto = async (photoId: number) => {
  // const {data} = await GET<string>(`/api/user-location/${photoId}`);
  const res = await GET<string>(`/hello`);
  console.log(res);
  return res;
};

export const useGetPhoto = (photoId: number) => {
  const QUERY_KEY = PHOTOS_KEYS.detail(String(photoId));

  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => getPhoto(photoId).then(res => res),
  });

  return {data, isLoading, isError, refetch};
};
