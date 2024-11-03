import {BaseResponse, POST} from '@/api/client';
import {useMutation} from '@tanstack/react-query';

/**
 * KakaoLoginRequest
 */
export interface KakaoLoginRequest {
  authorizationCode: string;
}

/**
 * KakaoLoginResponse
 */
export interface KakaoLoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const kakaoLogin = async (request: KakaoLoginRequest) => {
  const res = await POST<KakaoLoginResponse>(`/auth/kakao/login`, request);
  return res.data;
};

interface PostKakaoLoginProps {
  onSuccess: (res: BaseResponse<KakaoLoginResponse>) => void;
  onError: (e: Error) => void;
}

/**
 *  카카오 로그인 API
 *  kakao callback으로 받은 code를 전달하여 로그인 로직 수행
 */
export const useKakaoLoginCallback = ({
  onSuccess,
  onError,
}: PostKakaoLoginProps) => {
  return useMutation({
    mutationFn: (req: KakaoLoginRequest) => kakaoLogin(req),
    onSuccess: onSuccess,
    onError: onError,
  });
};
