import {css, keyframes} from 'styled-components';

/* 색상 팔레트 */
const colors = {
  primary: '#4277FF',
  primary_light: '#B7CBFF',
  secondary: '#1FE5FF',
  gray1: '#E1DEDF',
  gray2: '#ECEDEF',
  gray3: '#D9D9D9',
  gray4: '#BDBDBD',
  gray5: '#9C9C9C',
  gray6: '#858585',
  white: '#ffffff',
  black: '#393939',
};

/* 폰트 */
const fonts = {
  /** Title - Pretendard Bold 18s */
  title_b_18: {
    fontSize: 18,
    fontFamily: 'Pretendard-Bold',
  },
  /** Title - Pretendard Bold 16 */
  title_b_16: {
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
  },
  /** Title - Pretendard SemiBold 21 */
  title_eb_21: {
    fontSize: 21,
    fontFamily: 'Pretendard-ExtraBold',
    color: colors.black,
  },
  /** Title - Pretendard SemiBold 21 */
  title_sb_21: {
    fontSize: 21,
    fontFamily: 'Pretendard-SemiBold',
    color: colors.black,
  },
  /** Title - Pretendard Medium 16 */
  title_m_16: {
    fontSize: 16,
    fontFamily: 'Pretendard-Medium',
    color: colors.black,
  },
  /** Body - Pretendard SemiBold 17 */
  body_sb_17: {
    fontSize: 17,
    fontFamily: 'Pretendard-SemiBold',
    color: colors.black,
  },
  /** Body - Pretendard SemiBold 15 */
  body_sb_15: {
    fontSize: 15,
    fontFamily: 'Pretendard-SemiBold',
    color: colors.black,
  },
  /** Body - Pretendard Bold 16 */
  body_b_16: {
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
    color: colors.black,
  },
  /** Body - Pretendard Medium 16 */
  body_m_16: {
    fontSize: 16,
    fontFamily: 'Pretendard-Medium',
    color: colors.black,
  },
  /** Body - Pretendard Medium 15 */
  body_m_15: {
    fontSize: 15,
    fontFamily: 'Pretendard-Medium',
    color: colors.black,
  },
  /** PlanTitle - Pretendard Bold 16 */
  plan_title: {
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
    color: colors.black,
  },
  /** PlanDate - Pretendard Medium 14 */
  plan_date: {
    fontSize: 14,
    fontFamily: 'Pretendard-Medium',
    color: colors.gray6,
  },
  /** Body - Pretendard Medium 12 */
  body_m_12: {
    fontSize: 12,
    fontFamily: 'Pretendard-Medium',
  },
  /** Body - Pretendard Medium 8 */
  body_m_8: {
    fontSize: 8,
    fontFamily: 'Pretendard-Medium',
  },
  /** TabLabel - Pretendard Bold 11 */
  tab_active: {
    fontSize: 12,
    fontFamily: 'Pretendard-Bold',
    color: colors.primary,
  },
  /** TabLabel - Pretendard Medium 11 */
  tab_inactive: {
    fontSize: 11,
    fontFamily: 'Pretendard-Medium',
    color: colors.primary_light,
  },
  /** ModalTitle - Pretendard Bold 17 */
  modal_title: {
    fontSize: 17,
    fontFamily: 'Pretendard-Bold',
    color: colors.black,
  },
  /** ModalSubtitle - Pretendard Medium 14 */
  modal_subtitle: {
    fontSize: 14,
    fontFamily: 'Pretendard-Medium',
    color: colors.gray5,
  },
  /** ModalOption - Pretendard SemiBold 15 */
  modal_option: {
    fontSize: 15,
    fontFamily: 'Pretendard-SemiBold',
    color: colors.black,
  },
};

/* 믹스인 */
const mixins = {
  flexBox: (direction = 'row', justify = 'center', align = 'center') => css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
};

const theme = {
  colors: colors,
  fonts: fonts,
  mixins: mixins,
};

export default theme;
