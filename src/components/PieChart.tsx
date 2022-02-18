import { Box, Flex, Spinner } from "@chakra-ui/react";
import { FC } from "react";
import Plot from "react-plotly.js";
import { Indicator } from "../interfaces";
import { useSqlView } from "../stores/Queries";
const PieChart: FC<{
  indicator: Indicator;
  processor: (data: any, ...args: any[]) => any;
  args: any[];
}> = ({ indicator, processor, args }) => {
  const { isLoading, isError, isSuccess, error, data } = useSqlView(indicator);
  return (
    <Flex flex={1}>
      {isLoading && <Spinner />}
      {isSuccess && (
        <Plot
          data={processor(data, ...args)}
          
          layout={{
            annotations: [
              {
                font: {
                  size: 17,
                  color: "red",
                },
                showarrow: false,
                text: "",
                x: 0.5,
                y: 0.5,
              },
            ],
            showlegend: false,
            autosize: true,
            margin: {
              
              pad: 0,
              r: 0,
              t: 0,
              l: 0,
              b: 0,
            },
          }}
          style={{ width: "100%", height: "100%" }}
          config={{ displayModeBar: false, responsive: true }}
        />
      )}

      {isError && <Box>{error.message}</Box>}
    </Flex>
  );
};

export default PieChart;
