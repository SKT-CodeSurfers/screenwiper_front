import styled from 'styled-components/native';

const ResultStyles = {
  SubWrapper: styled.View<{isVertical?: boolean}>`
    ${({theme, isVertical}) =>
      isVertical
        ? theme.mixins.flexBox('column', 'center', 'flex-start')
        : theme.mixins.flexBox('row', 'flex-start', 'center')};
    gap: 10px;

    margin-left: 5px;
    margin-bottom: 10px;
  `,

  SubTitle: styled.Text`
    ${({theme}) => theme.fonts.body_b_16};
  `,

  SubContent: styled.Text`
    ${({theme}) => theme.fonts.body_m_16};
    padding-left: 5px;
  `,

  SummaryContent: styled.Text`
    ${({theme}) => theme.fonts.body_m_16};
    padding-left: 5px;
    line-height: 25px;
  `,

  Line: styled.View`
    flex: 1;
    border-bottom-width: 1px;
    margin-vertical: 10px;
    width: 100%;
    border-bottom-color: ${({theme}) => theme.colors.gray2};
  `,
};

const ResultPlanStyles = {
  PlanContainer: styled.View`
    ${({theme}) => theme.mixins.flexBox('column', 'center', 'flex-start')}
    gap: 10px;
  `,
  PlanBox: styled.View`
    ${({theme}) => theme.mixins.flexBox('column', 'center', 'flex-start')}
    gap: 10px;

    width: 100%;
    padding: 20px;
    border-radius: 8px;
    border: 2px solid #f5f5f6;
  `,
  PlanTitle: styled.Text`
    ${({theme}) => theme.fonts.plan_title}
  `,
  PlanDate: styled.Text`
    ${({theme}) => theme.fonts.plan_date}
  `,
};

const ResultSearch = {
  SearchContainer: styled.View`
    ${({theme}) => theme.mixins.flexBox('column', 'center', 'flex-start')}
    gap: 10px;
  `,

  SearchBox: styled.View`
    ${({theme}) => theme.mixins.flexBox('row', 'space-between', 'center')}
    gap: 10px;
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    background: ${({theme}) => theme.colors.gray2};
    align-items: stretch;
  `,

  TextContainer: styled.View`
    flex: 2;
    ${({theme}) => theme.mixins.flexBox('column', 'flex-start', 'flex-start')}
  `,

  SearchTitle: styled.Text`
    ${({theme}) => theme.fonts.body_m_15};
  `,

  SearchDate: styled.Text`
    ${({theme}) => theme.fonts.body_m_12};
    margin-top: 5px;
  `,

  SearchImage: styled.Image`
    flex: 1;
    height: 100%;
    border-radius: 8px;
  `,
};

export default ResultStyles;
export {ResultPlanStyles};
export {ResultSearch};
