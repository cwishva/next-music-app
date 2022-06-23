import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from '@utils/theme';
import RootRouter from '@routers/RootRouter';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RootRouter />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
