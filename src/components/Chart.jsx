import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import BarChart from "../smallcomponents/BarChart";

import Dounought from "../smallcomponents/Dounought";

const Chart = () => {
  return (
    <Box
      p={["10px 2%", "10px 2%", "10px 3%"]}
      // border={"2px solid black"}
      minH={"60vh"}
      w={"100%"}
      display={"flex"}
      flexWrap={"wrap"}
      columnGap={"30px"}
      rowGap={"30px"}
      bgColor={"#f5f6f8"}
    >
      <Box
        flex={["1 1 600px"]}
        maxWidth={"800px"}
        // border={"2px solid black"}
        boxShadow={"lg"}
        bgColor={"#fff"}
        h={"60vh"}
        w={"100%"}
        // minW={"550px"}
        position={"relative"}
        borderRadius={"10px"}
      >
        <Box position={"absolute"} pt={"10px"} pl={"10px"}>
          <Heading size={"lg"}>Overview</Heading>
          <Text>Monthly Earning</Text>
        </Box>
        <Box position={"absolute"} right={0} top={0} pt={"10px"} pr={"10px"}>
          <Button>Quarterly</Button>
        </Box>
        <BarChart />
      </Box>
      <Box
        flex={["1 1 100px"]}
        // border={"2px solid black"}
        boxShadow={"lg"}
        bgColor={"#fff"}
        minH={["50vh", "60vh"]}
        w={"100%"}
        p={["5px", "10px", "20px"]}
        borderRadius={"10px"}
      >
        <Box>
          <Heading
            textAlign={["center", "center", "center", "start"]}
            size={"lg"}
          >
            Customers
          </Heading>
          <Text textAlign={["center", "center", "center", "start"]}>
            Customers that buy products
          </Text>
        </Box>
        <VStack h={"40vh"}>
          <Dounought />
        </VStack>
      </Box>
    </Box>
  );
};

export default Chart;
