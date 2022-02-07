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
import OrgUnitTreeHierachy from "./OrgUnitHierachy";
import { useStore } from "effector-react";
import { useState } from "react";
import { $store } from "../stores/Store";
import { DatePicker } from "antd";
import SingleValue from "./SingleValue";
import BarGraphs from "./BarGraphs";
import VisualizeMap from "./VisualizeMap";
import { mainDashboard } from "../stores/Indicators";
import { processSingleValue } from "../stores/ProcessData";
import { HTMLMotionProps, motion } from "framer-motion";

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);


const { RangePicker } = DatePicker;
const Dashboard = () => {
  const handle = useFullScreenHandle();
  const store = useStore($store);
  const [index, setIndex] = useState<number>(0);
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
      key="performance"
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
        indicator={mainDashboard.total_reported_positive(
          store.selectedUnits,
          store.currentLevel + 1
        )}
        title="Total reported COVID-19 positive"
      />
    </MotionBox>,
    <MotionBox
      key="wastage"
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
        indicator={mainDashboard.total_reported_positive(
          store.selectedUnits,
          store.currentLevel + 1
        )}
        title=""
      />
    </MotionBox>,
  ];

  return (
    <FullScreen handle={handle}>
      <Box bg={realBg} p="5px">
        <HStack h="60px">
          <Image
            src="https://raw.githubusercontent.com/HISP-Uganda/covid-dashboard/master/src/images/Coat_of_arms_of_Uganda.svg"
            alt="Ministry of Health"
            boxSize="48px"
          />
          <Text fontSize="4xl">SBS COVID-19 Dashboard</Text>
          <Spacer />
          {handle.active ? (
            <Button onClick={handle.exit}>Exit fullscreen</Button>
          ) : (
            <Button onClick={handle.enter}>Enter fullscreen</Button>
          )}
          <Button>School Level</Button>
          <RangePicker style={{ height: "67%" }} />
          <OrgUnitTreeHierachy />
        </HStack>
        <Grid
          overflow="auto"
          h={["auto", "auto"]}
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
                          color="gray.500"
                          isTruncated
                        >
                          TOTAL SCHOOLS REGISTERED
                        </Text>
                      </Flex>
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
                      color="gray.500"
                      isTruncated
                    >
                      REPORTING RATES
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
                      indicator={mainDashboard.total_schools(
                        store.selectedUnits
                      )}
                      title="Target Schools"
                    />
                    <SingleValue
                      processor={processSingleValue}
                      indicator={mainDashboard.schools_reporting(
                        store.selectedUnits
                      )}
                      title="Schools Reporting"
                    />
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
                      color="gray.500"
                      isTruncated
                    >
                      SCREENING
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
                        processor={processSingleValue}
                        indicator={mainDashboard.no_screened(
                          store.selectedUnits
                        )}
                        title="No. Screened"
                      />
                    </Box>
                    <Box w="350px">
                      <SingleValue
                        processor={processSingleValue}
                        indicator={mainDashboard.screened_with_covid_symptoms (
                          store.selectedUnits
                        )}
                        title="with Covid-19 Symptoms"
                      />
                    </Box>
                    <Box w="350px">
                      <SingleValue
                        processor={processSingleValue}
                        indicator={mainDashboard.no_referred_testing(
                          store.selectedUnits
                        )}
                        title="No. Referred for Testing"
                      />
                    </Box>
                    <Box w="350px">
                      `<SingleValue
                        processor={processSingleValue}
                        indicator={mainDashboard.isolated_students(
                          store.selectedUnits
                        )}
                        title="Isolated Students"
                      />`
                    </Box>
                  </Flex>
                </Stack>
              </GridItem>
              <GridItem rowSpan={4} colSpan={5} bg="gray.600" h="100%" w="100%">
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
                      color="gray.500"
                      isTruncated
                    >
                      NUMBER SCREENED BY REGION
                    </Text>
                  </Flex>
                </Stack>
              </GridItem>
              <GridItem rowSpan={4} bg="white" h="100%" w="100%">
                <Stack h="100%" spacing={0}>
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
                      Single values here
                    </Text>
                  </Flex>

                  
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
                  <GridItem rowSpan={2} h="100%" bg="gray.600">
                    <Stack h="100%" spacing={0}>
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
                          NUMBER SCREENED BY REGION
                        </Text>
                      </Flex>
                      <VStack
                        flex={1}
                        h="100%"
                        w="100%"
                        alignItems="space-around"
                        justifyItems="space-around"
                        justifyContent="space-around"
                        alignContent="space-around"
                      >
                        <HStack
                          w="100%"
                          // bg="yellow"
                          justifyContent="space-around"
                          alignItems="center"
                          justifyItems="center"
                        ></HStack>
                        <HStack
                          w="100%"
                          justifyContent="space-around"
                          alignItems="center"
                          justifyItems="center"
                        ></HStack>
                      </VStack>
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
                          color="gray.500"
                          isTruncated
                        >
                          TOTAL ISOLATED AT SCHOOL
                        </Text>
                      </Flex>
                    </Stack>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem rowSpan={4} bg={bg}>
                {maps[index]}
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={12} bg="gray.400">
            <HStack>
              <Box></Box>
              <Flex
                flex={1}
                w="100%"
                h="100%"
                alignItems="center"
                justifyContent="center"
              ></Flex>
              <Box>
                <Image
                  src="https://raw.githubusercontent.com/HISP-Uganda/covid-dashboard/master/src/images/logo.png"
                  alt="Ministry of Health"
                  w="100%"
                  maxWidth="110px"
                  h="auto"
                />
              </Box>
            </HStack>
          </GridItem>
        </Grid>
      </Box>
    </FullScreen>
  );
};

export default Dashboard;
