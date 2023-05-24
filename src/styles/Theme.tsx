import { ThemeProvider } from "styled-components";
import theme from './themeMain'

export const Theme = ({ children }) => {
  console.log(children)
  return (
	 <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
}
