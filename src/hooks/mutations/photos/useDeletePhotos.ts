import {BaseResponse, DELETE} from '@/api/client';
import {useMutation} from '@tanstack/react-query';

/**
 *  스크린샷 삭제
 */
export const deletePhotos = async (photoId: number) => {
  const res = await DELETE<string>(`/photos/${photoId}`);
  return res.data;
};

interface DeletePhotoProps {
  onSuccess: (res: BaseResponse<string>) => void;
  onError: (e: Error) => void;
}

export const useDeletePhotos = ({onSuccess, onError}: DeletePhotoProps) => {
  return useMutation({
    mutationFn: (req: number) => deletePhotos(req),
    onSuccess: onSuccess,
    onError: onError,
  });
};
