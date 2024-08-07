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
  black: '#000000',
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
  title_sb_21: {
    fontSize: 21,
    fontFamily: 'Pretendard-SemiBold',
  },
  /** Title - Pretendard Medium 16 */
  title_m_16: {
    fontSize: 16,
    fontFamily: 'Pretendard-Medium',
  },
  /** Body - Pretendard SemiBold 17 */
  body_sb_17: {
    fontSize: 17,
    fontFamily: 'Pretendard-SemiBold',
  },
  /** Body - Pretendard Medium 16 */
  body_m_16: {
    fontSize: 16,
    fontFamily: 'Pretendard-Medium',
  },
  /** Body - Pretendard Medium 15 */
  body_m_15: {
    fontSize: 15,
    fontFamily: 'Pretendard-Medium',
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
