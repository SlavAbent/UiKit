import { ThemeProvider } from "styled-components";
import theme from './themeMain'

export const Theme = ({ children }: any) => {
  return (
	 <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
}
