import {BaseResponse, POST} from '@/api/client';
import {useMutation} from '@tanstack/react-query';

/**
 * AnalyzePhotoResponse
 */
export interface AnalyzePhotoResponse {
  photoId: Number;
  categoryId: Number;
  categoryName: string;
  title: string;
  address: string;
  operatingHours: string;
  list: {name: string; date: string}[];
  summary: string;
  photoName: string;
  photoUrl: string;
  date: string;
}

/**
 *  스크린샷 분석
 */
export const analyzePhotos = async (formdata: FormData) => {
  const res = await POST<AnalyzePhotoResponse>(`/analyze`, formdata, {
    headers: {'Content-Type': 'multipart/form-data'},
  });
  return res.data;
};

interface PostLocationMutationProps {
  onSuccess: (res: BaseResponse<AnalyzePhotoResponse>) => void;
  onError: (e: Error) => void;
}

export const usePostLocation = ({
  onSuccess,
  onError,
}: PostLocationMutationProps) => {
  return useMutation({
    mutationFn: (req: FormData) => analyzePhotos(req),
    onSuccess: onSuccess,
    onError: onError,
  });
};
