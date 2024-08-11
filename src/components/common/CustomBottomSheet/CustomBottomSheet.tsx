import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {IcDown} from '@/assets/icon';
import s from './CustomBottomSheet.styles';

// [TODO] 백이랑 맞춰서 타입 수정해야 함
interface ResultBottomSheetProps {
  data: {
    category: string;
    title: string;
    address: string;
    operatingHours: string;
    summary: string;
  };
}
export default function CustomBottomSheet({data}: ResultBottomSheetProps) {
  return (
    <BottomSheet snapPoints={['75%', '100%']}>
      <s.ScrollView>
        <s.CategoryButton>
          <s.CategoryText>{data.category}</s.CategoryText>
          <IcDown />
        </s.CategoryButton>

        <s.Title>{data.title}</s.Title>

        <s.SubTitle>
          주소 <s.SubContent>{data.address}</s.SubContent>{' '}
        </s.SubTitle>

        <s.SubTitle>
          영업시간
          <s.SubContent>{data.operatingHours}</s.SubContent>
        </s.SubTitle>

        <s.SubTitle>✨ 요약</s.SubTitle>
        <s.SubContent>{data.summary}</s.SubContent>
      </s.ScrollView>
    </BottomSheet>
  );
}
