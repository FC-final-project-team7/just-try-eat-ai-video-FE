import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from '~/styles/theme';
import Pages from '~/pages';
import { store } from '~/stores';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Pages />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
