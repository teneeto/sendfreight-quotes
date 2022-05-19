import ThemeProvider from './theme';
import Pages from './pages';
import {GlobalStyles} from './styles';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Pages />
    </ThemeProvider>
  );
}

export default App;
