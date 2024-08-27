import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {IcDown} from '@/assets/icon';
import s from './CustomBottomSheet.styles';
import ResultPlace from '../Result/ResultPlace';
import ResultOther from '../Result/ResultOther';
import ResultPlan from '../Result/ResultPlan';
import {
  IResultOther,
  IResultPlace,
  IResultPlan,
  ResultCategory,
} from '@/types/Result/ResultTypes';

// [TODO] 백이랑 맞춰서 타입 수정해야 함
interface ResultBottomSheetProps {
  data: IResultPlace | IResultPlan | IResultOther;
  modify: () => void;
}
export default function CustomBottomSheet({
  data,
  modify,
}: ResultBottomSheetProps) {
  return (
    <BottomSheet snapPoints={['75%', '100%']}>
      <s.ScrollView>
        <s.CategoryButton onPress={modify}>
          <s.CategoryText>{data.categoryName}</s.CategoryText>
          <IcDown />
        </s.CategoryButton>

        <s.Title>{data.title}</s.Title>

        {data.categoryName === ResultCategory.PLACE && (
          <ResultPlace data={data as IResultPlace} />
        )}
        {data.categoryName === ResultCategory.PLAN && (
          <ResultPlan data={data as IResultPlan} />
        )}
        {data.categoryName === ResultCategory.OTHER && (
          <ResultOther data={data as IResultOther} />
        )}
      </s.ScrollView>
    </BottomSheet>
  );
}
