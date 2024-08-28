import {BaseResponse, POST} from '@/api/client';
import {
  IResultOther,
  IResultPlace,
  IResultPlan,
} from '@/types/Result/ResultTypes';
import {useMutation} from '@tanstack/react-query';

/**
 * AnalyzePhotoResponse
 */
export type AnalyzePhotoResponse = IResultPlace | IResultPlan | IResultOther;

/**
 *  스크린샷 분석
 */
export const analyzePhotos = async (formdata: FormData) => {
  const res = await POST<AnalyzePhotoResponse[]>(
    `/v1/images/analyze`,
    formdata,
    {
      headers: {'Content-Type': 'multipart/form-data'},
    },
  );
  return res.data;
};

interface PostLocationMutationProps {
  onSuccess: (res: BaseResponse<AnalyzePhotoResponse[]>) => void;
  onError: (e: Error) => void;
}

export const usePostPhotos = ({
  onSuccess,
  onError,
}: PostLocationMutationProps) => {
  return useMutation({
    mutationFn: (req: FormData) => analyzePhotos(req),
    onSuccess: onSuccess,
    onError: onError,
  });
};
