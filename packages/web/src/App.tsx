/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider } from './theme';

const App = () => {
  return (
    <ThemeProvider>
      <h1>Hello</h1>
    </ThemeProvider>
  );
};

export default App;
