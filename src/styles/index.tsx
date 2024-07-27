import {ThemeProvider} from 'styled-components';
import theme from './theme';

interface StylesProps {
  children: React.ReactNode;
}
const Styles = ({children}: StylesProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Styles;
