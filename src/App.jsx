import { InitializeCart } from "./components";
import MyRoutes from "./routes/Routes.routes";
import theme from "./theme";

// REACT QUERY
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

// REACT REDUX
import { Provider } from "react-redux";
import store from "./app/store";

// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <InitializeCart />
          <MyRoutes />
        </ChakraProvider>
      </Provider>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
};

export default App;
