import { Spinner, Stack, Text, Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import { Indicator } from "../interfaces";
import { useSqlView } from "../stores/Queries";
import { formatter } from "../utils";

const ST: FC<{
  data: any;
  title: string;
  postfix?: string;
  direction?: "column" | "row";
  tooltip: string;
}> = ({ title, data, postfix, direction = "column", tooltip = "" }) => {
  return (
    <Stack
      spacing={direction === "column" ? 0 : "10px"}
      h="100%"
      justifyContent="center"
      alignItems="center"
      justifyItems="center"
      direction={direction}
    >
      <Tooltip label={`${tooltip} ${Number(data)}`} hasArrow placement="top">
        <Text
          textTransform="uppercase"
          fontWeight="medium"
          fontSize="0.7vw"
          isTruncated
        >
          {title}
        </Text>
      </Tooltip>

      <Text fontSize={"2.0vw"} color="" fontWeight="bold">
        {formatter.format(Number(data))}
        {postfix}
      </Text>
    </Stack>
  );
};

const SingleValue: FC<{
  indicator: Indicator;
  title: string;
  postfix?: string;
  hasProgress?: boolean;
  direction?: "column" | "row";
  processor: (...data: any[]) => any;
  tooltip?: string;
  otherArgs?: any[];
}> = ({
  indicator,
  title,
  postfix = "",
  hasProgress = false,
  direction = "column",
  tooltip = "",
  processor,
  otherArgs = [],
}) => {
  const { isLoading, isError, isSuccess, error, data } = useSqlView(indicator);
  return (
    <Stack h="100%" justifyItems="center" justifyContent="center">
      {isLoading && <Spinner />}
      {isSuccess && (
        <ST
          tooltip={tooltip}
          direction={direction}
          title={title}
          data={processor(data, ...otherArgs)}
          postfix={postfix}
        />
      )}
      {isError && <pre>{error.message}</pre>}
    </Stack>
  );
};

export default SingleValue;
