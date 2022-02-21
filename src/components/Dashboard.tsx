import React from "react";
import {
  Grid,
  GridItem,
  Button,
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
  useColorModeValue,
  chakra,
  HTMLChakraProps,
} from "@chakra-ui/react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import PieChart from "./PieChart";
import Donut from "./Donut";
import Speed from "./Speed";
import OrgUnitTreeHierachy from "./OrgUnitHierachy";
import moment from "moment";
import { useStore } from "effector-react";
import { useState } from "react";
import { $store } from "../stores/Store";
import { DatePicker } from "antd";
import SingleValue from "./SingleValue";
import SingleVal from "./SingleVal";
import BarGraphs from "./BarGraphs";
import useInterval from "react-useinterval";
import VisualizeMap from "./VisualizeMap";
import { mainDashboard } from "../stores/Indicators";
import {
  processSingleValue,
  processSingleRowValue,
  processPieData,
  calculateNoScreened,
  processReportingPercentage,
  processDonutData,
} from "../stores/ProcessData";
import { HTMLMotionProps, motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { changePeriod } from "../stores/Events";

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);

const { RangePicker } = DatePicker;
const Dashboard = () => {
  const handle = useFullScreenHandle();
  const store = useStore($store);
  const [date, setDate] = useState<[any, any]>([moment(), moment()]);
  const [selectedDate, setSelectedDate] = useState<[string, string]>([
    date[0].format("YYYY-MM-DD"),
    date[1].format("YYYY-MM-DD"),
  ]);
  const [index, setIndex] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  const templateColumns = useBreakpointValue({
    base: "100%",
    lg: "repeat(12, 1fr)",
  });
  const templateRows = useBreakpointValue({
    base: "100%",
    md: "repeat(16, 1fr)",
  });
  const bg = useColorModeValue("white", "#2D3748");
  const realBg = useColorModeValue("gray.300", "gray.900");
  const yColor = useColorModeValue("black", "white");

  const maps = [
    <MotionBox
      key="screened"
      h="100%"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
    >
      <VisualizeMap
        indicator={mainDashboard.screened_events(
          store.selectedUnits,
          store.currentLevel + 1,
          store.period[0].format("YYYY-MM-DD"),
          store.period[1].format("YYYY-MM-DD")
        )}
        title="Total Screened"
      />
    </MotionBox>,
    <MotionBox
      key="symptoms"
      h="100%"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
    >
      <VisualizeMap
        indicator={mainDashboard.screened_with_covid_symptoms_map(
          store.selectedUnits,
          store.currentLevel + 1,
          store.period[0].format("YYYY-MM-DD"),
          store.period[1].format("YYYY-MM-DD")
        )}
        title=" Number Screened with COVID-19 Symptoms"
      />
    </MotionBox>,
  ];

  const incrementMaps = () => setIndex((s: number) => (s + 1) % maps.length);
  useInterval(incrementMaps, 1000 * 30);
  return (
    <FullScreen handle={handle}>
      <Box bg={realBg} p="5px">
        <HStack h="60px">
          <Image
            src="https://raw.githubusercontent.com/HISP-Uganda/covid-dashboard/master/src/images/Coat_of_arms_of_Uganda.svg"
            alt="Ministry of Health"
            boxSize="48px"
          />
          <Text fontSize="4xl" fontWeight="bold" color="red.500">
            SBS COVID-19 Dashboard
          </Text>
          <Spacer />
          {handle.active ? (
            <Button onClick={handle.exit}>Exit fullscreen</Button>
          ) : (
            <Button onClick={handle.enter}>Enter fullscreen</Button>
          )}
          <RangePicker
            style={{ height: "67%" }}
            value={store.period}
            onChange={changePeriod}
          />
          <OrgUnitTreeHierachy />
        </HStack>
        <Grid
          overflow="auto"
          h={[
            "auto",
            "auto",
            `calc(100vh - ${handle.active ? "70px" : "118px"})`,
          ]}
          w="calc(100vw - 10px)"
          templateColumns={templateColumns}
          templateRows={templateRows}
          gap={1}
        >
          <GridItem colSpan={[1, 1, 8]} rowSpan={15}>
            <Grid
              templateRows="repeat(6, 1fr)"
              templateColumns="repeat(6, 1fr)"
              gap={1}
              h="100%"
            >
              <GridItem colSpan={2} bg="gray.100" h="100%">
                <Grid h="100%" bg="gray.200">
                  <GridItem bg="white">
                    <Stack spacing={0} h="100%" w="100%">
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
                          color="blue.500"
                          isTruncated
                        >
                          TOTAL SCHOOLS REGISTERED
                        </Text>
                      </Flex>
                      <SingleValue
                        processor={processSingleValue}
                        indicator={mainDashboard.total_schools_registered(
                          store.selectedUnits
                        )}
                        title="Schools Registered"
                      />
                      <HStack
                        justifyItems="space-around"
                        justifyContent="space-around"
                        w="100%"
                        h="100%"
                        flex={1}
                      ></HStack>
                    </Stack>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem bg="white" colSpan={4}>
                <Stack direction="column" spacing={0}>
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
                      color="blue.500"
                      isTruncated
                    >
                      REPORTING RATES THIS YEAR
                    </Text>
                  </Flex>
                  <HStack
                    flex={1}
                    justifyItems="space-around"
                    justifyContent="space-around"
                    h="100%"
                    w="100%"
                  >
                    <SingleValue
                      processor={processSingleValue}
                      indicator={mainDashboard.registered_reporters(
                        store.selectedUnits
                      )}
                      title="Sch with Reg Reporters"
                    />
                    <SingleValue
                      processor={processSingleValue}
                      indicator={mainDashboard.users_at_school_level(
                        store.selectedUnits,
                        store.period[0].format("YYYY-MM-DD"),
                        store.period[1].format("YYYY-MM-DD")
                      )}
                      title="Reg Users at Sch level"
                    />
                    <SingleValue
                      processor={processSingleValue}
                      indicator={mainDashboard.schools_reporting(
                        store.selectedUnits,
                        store.period[0].format("YYYY-MM-DD"),
                        store.period[1].format("YYYY-MM-DD")
                      )}
                      title="Schools Reporting"
                    />
                    <Box w="350px">
                      <Speed
                        processor={processReportingPercentage}
                        indicator={mainDashboard.report_percentage(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD")
                        )}
                        title="% of Schools Reporting"
                      />
                      <Text color="blue.500" p={5}>
                        ({store.period[0].format("YYYY-MM-DD")} -{" "}
                        {store.period[1].format("YYYY-MM-DD")})
                      </Text>
                    </Box>
                  </HStack>
                </Stack>
              </GridItem>

              <GridItem
                direction="column"
                justifyContent="center"
                colSpan={6}
                bg="white"
                justifyItems="center"
              >
                <Stack spacing={0} h="100%">
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
                      color="blue.500"
                      isTruncated
                    >
                      SCREENING ({store.period[0].format("YYYY-MM-DD")} -{" "}
                      {store.period[1].format("YYYY-MM-DD")})
                    </Text>
                  </Flex>
                  <Flex
                    direction="row"
                    justifyContent="space-around"
                    justifyItems="center"
                    alignItems="center"
                    h="100%"
                    flex={1}
                  >
                    <Box w="350px">
                      <SingleValue
                        processor={calculateNoScreened}
                        indicator={mainDashboard.no_screened(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD")
                        )}
                        title="screened events"
                      />
                    </Box>
                    <Box w="350px">
                      <SingleValue
                        processor={processSingleValue}
                        indicator={mainDashboard.screened_with_covid_symptoms(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD")
                        )}
                        title="# with Symptoms"
                      />
                    </Box>
                    <Box w="350px">
                      <SingleVal
                        processor={processSingleValue}
                        indicator={mainDashboard.percentage_with_symptoms(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD")
                        )}
                        postfix="%"
                        title="% with Symptoms"
                      />
                    </Box>
                    <Box w="350px">
                      <SingleValue
                        processor={processSingleValue}
                        indicator={mainDashboard.no_referred_testing(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD")
                        )}
                        title="No. Referred for Testing"
                      />
                    </Box>
                    <Box w="350px">
                      <SingleValue
                        processor={processSingleValue}
                        indicator={mainDashboard.number_tested_positive(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD")
                        )}
                        title="No. Reported positive"
                      />
                    </Box>
                    <Box w="350px">
                      <SingleVal
                        processor={processSingleValue}
                        indicator={mainDashboard.cumulative_positive(
                          store.selectedUnits,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD")
                        )}
                        title="Cumulative Positives"
                      />
                    </Box>
                  </Flex>
                </Stack>
              </GridItem>
              <GridItem rowSpan={4} colSpan={5} bg="white" h="100%" w="100%">
                <Stack spacing={0} h="100%">
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
                      color="blue.500"
                      isTruncated
                    >
                      PERFOMANCE BY REGION AND OVER TIME (
                      {store.period[0].format("YYYY-MM-DD")} -{" "}
                      {store.period[1].format("YYYY-MM-DD")})
                    </Text>
                  </Flex>
                  <BarGraphs yColor={yColor} bg={bg} />
                </Stack>
              </GridItem>
              <GridItem rowSpan={4} bg="white" h="100%" w="100%">
                <Stack h="100%" spacing={0}>
                  <Flex
                    alignItems="center"
                    bg="gray.200"
                    h="100px"
                    alignContent="center"
                    justifyItems="center"
                    pb={4}
                  >
                    <Text
                      pl="25px"
                      h="30px"
                      textTransform="uppercase"
                      fontWeight="bold"
                      fontSize="0.7vw"
                      color="blue.500"
                    >
                      School based Care <br />(
                      {store.period[0].format("YYYY-MM-DD")} -{" "}
                      {store.period[1].format("YYYY-MM-DD")})
                    </Text>
                  </Flex>
                  <SingleVal
                    processor={processSingleValue}
                    indicator={mainDashboard.isolated_students(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD")
                    )}
                    postfix="%"
                    title="% Isolated at school"
                  />
                  <SingleVal
                    processor={processSingleValue}
                    indicator={mainDashboard.percentage_referred_for_testing(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD")
                    )}
                    postfix="%"
                    title="% Referred for testing"
                  />
                  <SingleValue
                    processor={processSingleValue}
                    indicator={mainDashboard.number_isolated_at_school(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD")
                    )}
                    title="Isolated at School"
                  />
                  <SingleValue
                    processor={processSingleValue}
                    indicator={mainDashboard.managed_from_school(
                      store.selectedUnits,
                      store.period[0].format("YYYY-MM-DD"),
                      store.period[1].format("YYYY-MM-DD")
                    )}
                    title="Cases Managed at School"
                  />
                </Stack>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={[1, 1, 4]} rowSpan={15}>
            <Grid templateRows="repeat(6, 1fr)" h="100%" gap={1}>
              <GridItem rowSpan={2}>
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  templateRows="repeat(2, 1fr)"
                  gap={1}
                  h="100%"
                >
                  <GridItem rowSpan={2} bg="gray.200">
                    <Stack w="100%" h="100%" spacing={0}>
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
                          color="blue.500"
                          isTruncated
                        >
                          Suspects Isolated at School
                        </Text>
                      </Flex>

                      <PieChart
                        processor={processPieData}
                        indicator={mainDashboard.number_isolated_school(
                          store.selectedUnits,
                          store.sublevel,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD")
                        )}
                        args={[store.sublevels]}
                      />
                    </Stack>
                  </GridItem>
                  <GridItem rowSpan={2} bg="gray.200">
                    <Stack w="100%" h="100%" spacing={0}>
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
                          color="blue.500"
                          isTruncated
                        >
                          % having signs and symptoms of COVID-19
                        </Text>
                      </Flex>
                      <Donut
                        processor={processDonutData}
                        indicator={mainDashboard.per_positives_in_school_based_care(
                          store.selectedUnits,
                          store.sublevel,
                          store.period[0].format("YYYY-MM-DD"),
                          store.period[1].format("YYYY-MM-DD")
                        )}
                        args={[store.sublevels]}
                      />
                    </Stack>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem rowSpan={4} bg={bg}>
                {maps[index]}
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={12} bg={bg}>
            <HStack>
              <Flex
                flex={1}
                w="100%"
                h="100%"
                alignItems="center"
                justifyContent="center"
              >
                <Marquee pauseOnHover speed={100}>
                  <HStack h="100%" w="100%">
                    <SingleVal
                      processor={processSingleRowValue}
                      direction="row"
                      indicator={mainDashboard.screened(
                        store.selectedUnits,
                        store.period[0].format("YYYY-MM-DD"),
                        store.period[1].format("YYYY-MM-DD")
                      )}
                      title="Number Screened"
                    />
                    <SingleVal
                      processor={processSingleValue}
                      direction="row"
                      indicator={mainDashboard.screened_with_covid_symptoms(
                        store.selectedUnits,
                        store.period[0].format("YYYY-MM-DD"),
                        store.period[1].format("YYYY-MM-DD")
                      )}
                      title="Number with Symptoms"
                    />
                    <SingleVal
                      processor={processSingleRowValue}
                      direction="row"
                      indicator={mainDashboard.no_referred_testing(
                        store.selectedUnits,
                        store.period[0].format("YYYY-MM-DD"),
                        store.period[1].format("YYYY-MM-DD")
                      )}
                      title="Number referred for testing"
                    />
                    <SingleVal
                      processor={processSingleRowValue}
                      direction="row"
                      indicator={mainDashboard.no_isolated_at_school(
                        store.selectedUnits,
                        store.period[0].format("YYYY-MM-DD"),
                        store.period[1].format("YYYY-MM-DD")
                      )}
                      title="Number Isolated at School"
                    />
                    <SingleVal
                      processor={processSingleValue}
                      direction="row"
                      indicator={mainDashboard.number_tested_positive(
                        store.selectedUnits,
                        store.period[0].format("YYYY-MM-DD"),
                        store.period[1].format("YYYY-MM-DD")
                      )}
                      title="No. Reported positive"
                    />
                    <SingleVal
                      processor={processSingleRowValue}
                      direction="row"
                      indicator={mainDashboard.cases_manages_from_school(
                        store.selectedUnits,
                        store.period[0].format("YYYY-MM-DD"),
                        store.period[1].format("YYYY-MM-DD")
                      )}
                      title="Covid Cases Managed from school"
                    />
                  </HStack>
                </Marquee>
                <Box>
                <Image
                  src="https://raw.githubusercontent.com/HISP-Uganda/covid-dashboard/master/src/images/logo.png"
                  alt="Ministry of Health"
                  w="100%"
                  maxWidth="110px"
                  h="auto"
                />
              </Box>
              </Flex>
              
            </HStack>
          </GridItem>
        </Grid>
      </Box>
    </FullScreen>
  );
};

export default Dashboard;
