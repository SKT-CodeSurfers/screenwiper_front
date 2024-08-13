import styled from 'styled-components/native';


export const StyledCard = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  width: 300px;
  position: relative;
`;

export const TitleText = styled.Text`
  ${({ theme }) => theme.fonts.body_sb_17};
  color: #333;
  margin-bottom: 5px;
  padding-right: 80px;
`;

export const ScheduleTitleText = styled.Text`
  ${({ theme }) => theme.fonts.title_b_16};
  color: #333;
  margin-bottom: 5px;
  text-align: right;
`;

export const LocationText = styled.Text`
  ${({ theme }) => theme.fonts.body_m_8};
  color: #666;
  margin-left: 5px;
`;

export const LocationRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const DescriptionText = styled.View`
  background-color: #F5F5F6;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  ${({ theme }) => theme.fonts.body_m_12};
`;

export const ScheduleDescriptionText = styled.Text`
  ${({ theme }) => theme.fonts.body_m_12};
  color: #666;
  text-align: right;
`;

export const BulletPointWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const BulletPoint = styled.Text`
  color: #666;
  margin-right: 5px;
`;

export const BulletTextWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BulletText = styled.Text`
  ${({ theme }) => theme.fonts.body_m_12};
  color: #666;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  width: 300px;
`;

export const DateContainer = styled.View`
  width: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 15px;
`;

export const DateText = styled.Text`
  ${({ theme }) => theme.fonts.title_sb_21};
  color: #333;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

interface CategoryBadgeProps {
  category: 'Place' | 'Schedule' | 'Others';
}

export const CategoryBadge = styled.Text<CategoryBadgeProps>`
  background-color: ${({ category }) => 
    category === 'Place' ? '#4277FF' : 
    category === 'Schedule' ? '#776BFD' : 
    '#A6A6A6'};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  ${({ theme }) => theme.fonts.body_m_12};
  position: absolute;
  top: 0px;
  right: 0px;
`;
