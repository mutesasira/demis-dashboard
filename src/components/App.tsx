import {
    Box,
    ChakraProvider, Spinner, Text, VStack
  } from "@chakra-ui/react";
  import { useLoader } from "../stores/Queries";
  import Dashboard from "./Dashboard";
  import theme from "./theme";
  
  const App = () => {
    const { isLoading, isError, isSuccess, error } = useLoader();
    return (
      <ChakraProvider theme={theme}>
        <VStack
          w="100vw" 
          alignItems="center"
          justifyContent="center"
        >
          {isLoading && (
            <VStack>
              <Spinner />
              <Text>Loading...</Text>
            </VStack>
          )}
          {isSuccess && <Dashboard />}
          {isError && <Box>{error.message}</Box>}
        </VStack>
      </ChakraProvider>
    );
  };
  
  export default App;
  