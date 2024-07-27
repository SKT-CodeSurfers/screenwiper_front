import {css, keyframes} from 'styled-components';
import {lightPalette} from './palette';
import {typography} from './typography';

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
  colors: lightPalette,
  fonts: typography,
  mixins: mixins,
};

export default theme;
