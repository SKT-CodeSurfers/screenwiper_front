import {GET} from '@/api/client';
import {useQuery} from '@tanstack/react-query';
import {PHOTOS_KEYS} from '../QueryKeys';
import {ResultTypes} from '@/types/Result/ResultTypes';

export interface GetPhotoListRequest {
  type: string;
  page: number;
}

export interface GetPhotoListResponse {
  totalPages: number;
  totalElements: number;
  photos: ResultTypes[];
}

/**
 *  스크린샷 리스트 조회 API
 */
export const getPhotoList = async ({type, page}: GetPhotoListRequest) => {
  const res = await GET<GetPhotoListResponse>(
    `/photos/list?type=${type}&page=${page}`,
  );
  return res.data;
};

export const useGetPhotoList = (req: GetPhotoListRequest) => {
  const QUERY_KEY = PHOTOS_KEYS.list(req);

  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => getPhotoList(req).then(res => res),
  });

  return {data, isLoading, isError, refetch};
};
