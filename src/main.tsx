import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AudioProvider } from './context/AudioContext';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // Never refetch data
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AudioProvider>
        <App />
      </AudioProvider>
      <ReactQueryDevtools initialIsOpen={false}/>
    </BrowserRouter>
  </QueryClientProvider>
)
