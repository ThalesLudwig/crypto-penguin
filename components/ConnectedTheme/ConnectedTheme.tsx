import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import THEME from "../../constants/theme";
import StoreType from "../../types/StoreType";
import ThemeType from "../../types/ThemeType";
import "react-toastify/dist/ReactToastify.css";

type ConnectedThemeType = {
  children: any;
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }: { theme: ThemeType }) => theme.BACKGROUND};
  }
`;

const ConnectedTheme = ({ children }: ConnectedThemeType) => {
  const { isDarkMode } = useSelector((store: StoreType) => store.theme);
  return (
    <ThemeProvider theme={isDarkMode ? THEME.DARK : THEME.LIGHT}>
      <GlobalStyle />
      <ToastContainer
        closeOnClick
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme={isDarkMode ? "dark" : "light"}
      />
      {children}
    </ThemeProvider>
  );
};

export default ConnectedTheme;
