import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from '~/stores';

import theme from '~/styles/theme';
import GlobalStyle from '~/styles/GlobalStyle';

import Pages from '~/pages';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Pages />
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
