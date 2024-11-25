import React, {Suspense, useState} from 'react';
import {
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import s from './Result.styles';
import {ResultSearch as SR} from './Result.styles';
import {IResultOther} from '@/types/Result/ResultTypes';
import {useGetDetect} from '@/hooks/queries/photos/useGetDetect';

interface ResultOtherProps {
  data: IResultOther;
}
export default function ResultOther({data}: ResultOtherProps) {
  const {photoId} = data;
  const {data: detectData, isError, isLoading} = useGetDetect({photoId});

  const handleCardPress = (url: string) => {
    Linking.openURL(url).catch(err =>
      console.error('URL을 여는 중 오류가 발생했습니다:', err),
    );
  };

  const [similarImages, setSimilarImages] = useState(
    detectData?.visuallySimilarImages,
  );
  const recommendImages = detectData?.pagesWithMatchingImages;

  const handleImageError = imageUrl => {
    setSimilarImages(prevImages =>
      prevImages.filter(image => image.imageUrl !== imageUrl),
    );
    console.log('이미지 로드 실패:', imageUrl);
  };

  return (
    <>
      <s.SubWrapper isVertical={true}>
        <s.SubTitle>✨ 요약</s.SubTitle>
        <s.SummaryContent>{data.summary}</s.SummaryContent>
        <s.Line />

        <SR.SearchTitleText>검색 정보</SR.SearchTitleText>

        {isLoading ? (
          <ActivityIndicator size="small" />
        ) : (
          <>
            {!(similarImages && similarImages.length > 0) &&
              !(recommendImages && recommendImages.length > 0) && (
                <s.SummaryContent>검색 결과가 없어요</s.SummaryContent>
              )}
            {similarImages && similarImages.length > 0 && (
              <>
                <s.SubTitle>🔎 유사한 이미지</s.SubTitle>
                <SR.SearchBoxContainer
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    columnGap: 10,
                  }}>
                  {similarImages.map((item, idx) => (
                    <TouchableOpacity
                      key={idx}
                      onPress={() => handleCardPress(item.imageUrl)}>
                      {item.imageUrl && (
                        <SR.SearchImage
                          source={{uri: item.imageUrl}}
                          onError={() => handleImageError(item.imageUrl)}
                        />
                      )}
                    </TouchableOpacity>
                  ))}
                </SR.SearchBoxContainer>
                <s.Line />
              </>
            )}
            {recommendImages && recommendImages.length > 0 && (
              <>
                <s.SubTitle>🔎 유사한 페이지</s.SubTitle>
                <SR.SearchContainer>
                  {recommendImages?.map(({imageUrl, url, title}, idx) => (
                    <TouchableOpacity
                      key={idx}
                      onPress={() => handleCardPress(url)}>
                      <SR.SearchItem>
                        <SR.TextContainer>
                          <SR.SearchTitle
                            numberOfLines={2}
                            ellipsizeMode="tail">
                            {title}
                          </SR.SearchTitle>
                        </SR.TextContainer>
                        {imageUrl && (
                          <SR.SearchImage
                            source={{uri: imageUrl}}
                            onError={() =>
                              console.log('이미지 로드 실패:', imageUrl)
                            }
                          />
                        )}
                      </SR.SearchItem>
                    </TouchableOpacity>
                  ))}
                </SR.SearchContainer>
              </>
            )}
          </>
        )}
      </s.SubWrapper>
    </>
  );
}
