import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useStore } from "effector-react";
import { FC, useState } from "react";
import useInterval from "react-useinterval";

import {
  processBarData,
} from "../stores/ProcessData";
import { mainDashboard } from "../stores/Indicators";
import { $store } from "../stores/Store";
import { BarGraph } from "./BarGraph";
const BarGraphs: FC<{ yColor: string; bg: string }> = ({ yColor, bg }) => {
  const store = useStore($store);
  const [tabIndex, setTabIndex] = useState<number>(0);

  const increment = () => setTabIndex((s: number) => (s + 1) % 5);
  useInterval(increment, 1000 * 60 * 2);

  return (
    <Tabs
      flex={1}
      index={tabIndex}
      onChange={(index) => setTabIndex(index)}
      h={["auto", "auto", "100%"]}
      w="100%"
      display="flex"
      flexDirection="column"
    >
      <TabList flexDirection={["column", "column", "row"]}>
        <Tab fontSize="lg">Performance(Daily)</Tab>
      </TabList>
      <TabPanels h="100%" w="100%" flex={1}>
        <TabPanel p={0} m={0} h="100%" w="100%">
          <BarGraph
            title="Daily performance"
            bg={bg}
            yColor={yColor}
            indicator={mainDashboard.performance(store.selectedUnits)}
            processor={processBarData}
          />
        </TabPanel>
        
        
      </TabPanels>
    </Tabs>
  );
};

export default BarGraphs;
