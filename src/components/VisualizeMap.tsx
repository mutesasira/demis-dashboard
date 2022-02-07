import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useStore } from "effector-react";
import { FC } from "react";
import { Indicator } from "../interfaces";
import { useMaps } from "../stores/Queries";
import { $store } from "../stores/Store";
import Map from "./Map";
const VisualizeMap: FC<{ indicator: Indicator; title: string }> = ({
  indicator,
  title,
}) => {
  const store = useStore($store);
  const { isLoading, isError, isSuccess, error, data } = useMaps(
    store.currentLevel,
    store.selectedUnits
  );
  return (
    <>
      {isLoading && <Spinner />}
      {isSuccess && (
        <Map
          metadata={data}
          indicator={indicator}
          center={data.mapCenter}
          title={title}
        />
      )}
      {isError && <Box>{error.message}</Box>}
    </>
  );
};

export default VisualizeMap;
