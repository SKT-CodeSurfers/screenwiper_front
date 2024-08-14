import React from 'react';
import {ResultPlanStyles as s} from './Result.styles';
import {IResultPlan} from '@/types/Result/ResultTypes';

interface ResultPlanProps {
  data: IResultPlan;
}
export default function ResultPlan({data}: ResultPlanProps) {
  return (
    <>
      <s.PlanContainer>
        {data.list.map((plan, idx) => (
          <s.PlanBox key={idx}>
            <s.PlanTitle>{plan.name}</s.PlanTitle>
            <s.PlanDate>{plan.date}</s.PlanDate>
          </s.PlanBox>
        ))}
      </s.PlanContainer>
    </>
  );
}
