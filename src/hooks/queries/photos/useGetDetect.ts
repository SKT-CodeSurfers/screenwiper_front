import {GET} from '@/api/client';
import {useQuery} from '@tanstack/react-query';

// 요청 타입 정의
export interface GetDetectRequest {
  photoId: string;
}

type Image = {
  title: string | null;
  imageUrl: string;
  url?: string;
};
export interface GetDetectResponse {
  pagesWithMatchingImages: Image[];
  visuallySimilarImages: Image[];
}

// 이미지 분석 API 호출 함수
export const getDetect = async ({photoId}: GetDetectRequest) => {
  const res = await GET<GetDetectResponse>(`/images/detect/${photoId}`);
  console.log('>>', res.data);
  return res.data;
};

export const useGetDetect = (req: GetDetectRequest) => {
  const QUERY_KEY = ['PHOTOS', 'DETECT', req.photoId];

  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => getDetect(req),
  });

  return {data, isLoading, isError, refetch};
};
