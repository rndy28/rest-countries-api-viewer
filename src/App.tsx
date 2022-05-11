import Layout from 'components/organism/Layout';
import GlobalStyles from 'GlobalStyles';
import Details from 'pages/details';
import Home from 'pages/home';
import { useState, createContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { dark, light } from 'themes';


type ThemeContextT = () => void;

export const themeContext = createContext<ThemeContextT>({} as ThemeContextT);

const Provider = themeContext.Provider;

const App = () => {
  const [ligthTheme, setLightTheme] = useState(false);

  const toggleTheme = () => setLightTheme(prev => !prev)

  return (
    <ThemeProvider theme={ligthTheme ? light : dark}>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Navigate to='/countries' />} />

        <Route path='countries' element={<Provider value={toggleTheme}>
          <Layout />
        </Provider>}>
          <Route index element={<Home />} />
          <Route path=':countryName' element={<Details />} />
        </Route>
      </Routes>

    </ThemeProvider>
  );
};

export default App;