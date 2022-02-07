import { QueryClient, QueryClientProvider } from "react-query";
import App from "./components/App";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
const MyApp = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
export default MyApp;