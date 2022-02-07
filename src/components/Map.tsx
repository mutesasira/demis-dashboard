import Plot from "react-plotly.js";
import { Box, Spinner, Flex, Text,Stack } from "@chakra-ui/react";
import { useSqlView } from "../stores/Queries";
import { Indicator } from "../interfaces";
import { FC } from "react";
import { Position } from "@turf/turf";
import { $store } from "../stores/Store";
import { useStore } from "effector-react";
const Map: FC<{
  metadata: any;
  indicator: Indicator;
  center: Position;
  title:string;
}> = ({ metadata, indicator, center,title }) => {
  const { isLoading, isError, isSuccess, error, data } = useSqlView(indicator);
  const store = useStore($store);
  return (
    <Stack h="100%" spacing={0}>
      {isLoading && <Spinner />}
      {isSuccess && (
        <>
          <Flex
            alignItems="center"
            bg="gray.200"
            h="30px"
            alignContent="center"
            justifyItems="center"
          >
            <Text
              pl="25px"
              h="20px"
              textTransform="uppercase"
              fontWeight="bold"
              fontSize="0.8vw"
              color="gray.500"
              isTruncated
            >
              {title}
            </Text>
          </Flex>
          <Flex flex={1} h="100%">
            <Plot
              data={[
                {
                  type: "choroplethmapbox",
                  locations: metadata.organisationUnits.map(
                    (ou: { id: string; name: string }) => ou.name
                  ),
                  z: metadata.organisationUnits.map(
                    ({ id }) => data.numerators[id] || 0
                  ),
                  featureidkey: "properties.name",
                  geojson: metadata.geojson,
                } as any,
              ]}
              layout={{
                mapbox: {
                  style: "open-street-map",
                  center: { lon: center[0], lat: center[1] },
                  zoom: store.zoom,
                },
                autosize: true,
                margin: {
                  pad: 0,
                  r: 0,
                  t: 0,
                  l: 0,
                  b: 0,
                },
              }}
              useResizeHandler={true}
              style={{ width: "100%", height: "100%" }}
              config={{ displayModeBar: false, responsive: true }}
            />
          </Flex>
        </>
      )}
      {isError && <Box>{error.message}</Box>}
    </Stack>
  );
};

export default Map;
