import {GET} from '@/api/client';
import {useQuery} from '@tanstack/react-query';
import {PHOTOS_KEYS} from '../QueryKeys';
import {ResultTypes} from '@/types/Result/ResultTypes';

export interface GetPhotoRequest {
  photoId: string;
}

export interface GetPhotoResponse {
  data: ResultTypes;
}

/**
 *  스크린샷 상세 조회 API
 */
export const getPhoto = async ({photoId}: GetPhotoRequest) => {
  const res = await GET<GetPhotoResponse>(`/photos/${photoId}`);
  console.log('>>', res.data);
  return res.data;
};

export const useGetPhoto = (req: GetPhotoRequest) => {
  const QUERY_KEY = PHOTOS_KEYS.list(req);

  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => getPhoto(req).then(res => res),
  });

  return {data, isLoading, isError, refetch};
};
