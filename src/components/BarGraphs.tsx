import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useStore } from "effector-react";
import { FC, useState } from "react";
import useInterval from "react-useinterval";
import { $store } from "../stores/Store";
import {
  processTestData,
  processBarData,
} from "../stores/ProcessData";
import { mainDashboard } from "../stores/Indicators";
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
        <Tab fontSize="lg">Schools Reporting</Tab>
        <Tab fontSize="lg">Reported COVID-19 positive</Tab>
        <Tab fontSize="lg">Number isolated at school</Tab>
      </TabList>
      <TabPanels h="100%" w="100%" flex={1}>
        <TabPanel h="100%" w="100%" p={0} m={0}>
          <BarGraph
            title="Number Isolated at School"
            bg={bg}
            yColor={yColor}
            indicator={mainDashboard.reporting_schools(
              store.selectedUnits,
              store.sublevel,
              store.period[0].format("YYYY-MM-DD"),
              store.period[1].format("YYYY-MM-DD")
            )}
            processor={processBarData}
            args={[store.sublevels]}
          />
        </TabPanel>
        <TabPanel p={0} m={0} h="100%" w="100%">
          <BarGraph
            title="Reported Positive"
            bg={bg}
            yColor={yColor}
            indicator={mainDashboard.referred_for_testing_tested_positive(
              store.selectedUnits,
              store.sublevel,
              store.period[0].format("YYYY-MM-DD"),
              store.period[1].format("YYYY-MM-DD")
            )}
            processor={processBarData}
            args={[store.sublevels]}
          />
        </TabPanel>
        <TabPanel h="100%" w="100%" p={0} m={0}>
          <BarGraph
            title="Number Isolated at School"
            bg={bg}
            yColor={yColor}
            indicator={mainDashboard.number_isolated_school(
              store.selectedUnits,
              store.sublevel,
              store.period[0].format("YYYY-MM-DD"),
              store.period[1].format("YYYY-MM-DD")
            )}
            processor={processTestData}
            args={[store.sublevels]}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default BarGraphs;
