import React, {useState} from 'react';
import { TouchableOpacity, Linking, ActivityIndicator } from 'react-native';
import s from './Result.styles';
import {ResultSearch as SR} from './Result.styles';
import {IResultOther} from '@/types/Result/ResultTypes';
import {useGetDetect} from '@/hooks/queries/photos/useGetDetect'

interface ResultOtherProps {
  data: IResultOther;
}
export default function ResultOther({data}: ResultOtherProps) {

  const {photoId} = data;
  const {data: detectData, isError, isLoading} = useGetDetect({photoId});

  if (isLoading) {
    return console.log("로딩중");
  }

  if (isError) {
    return console.log("에러");
  }

  const handleCardPress = (url: string) => {
    Linking.openURL(url).catch(err =>
      console.error("URL을 여는 중 오류가 발생했습니다:", err)
    );
  };

  return (
    <>
      <s.SubWrapper isVertical={true}>
        <s.SubTitle>✨ 요약</s.SubTitle>
        <s.SummaryContent>{data.summary}</s.SummaryContent>
        <s.Line/>
        <s.SubTitle>🔎 이미지 검색결과</s.SubTitle>
        <SR.SearchContainer>
          {detectData?.similarImages?.map((imageUrl, idx)=> (
            <TouchableOpacity key={idx} onPress={() => handleCardPress(imageUrl)}>
              <SR.SearchBox>
                <SR.TextContainer>
                  <SR.SearchTitle numberOfLines={2} ellipsizeMode="tail">
                    이미지 {idx + 1}
                  </SR.SearchTitle>
                </SR.TextContainer>
                {imageUrl ? (
                  <SR.SearchImage
                    source={{ uri: imageUrl }}
                    onError={() => console.log('이미지 로드 실패:', imageUrl)}
                  />
                ) : (
                  <ActivityIndicator size="small" color="#0000ff" />
                )}
              </SR.SearchBox>
            </TouchableOpacity>
          ))}
      </SR.SearchContainer>
      </s.SubWrapper>
    </>
  );
}
