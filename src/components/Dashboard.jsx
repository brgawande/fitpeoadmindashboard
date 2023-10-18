import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import Header from "../layout/Header";
import Boxes from "../smallcomponents/Boxes";
import Chart from "./Chart";
import Tableproducts from "./Tableproducts";
import Sidebarr from "../layout/Sidebarr";

const Dashboard = () => {
  return (
    <Box
      display={"flex"}
      position={"relative"}
      justifyContent={"space-between"}
    >
      <Box minH={["147vh"]} backgroundColor="#040440">
        <Sidebarr />
      </Box>
      <Box h={"100%"} width={"100%"}>
        <Header />
        <Boxes />
        <Chart />
        <Tableproducts />
      </Box>
    </Box>
  );
};

export default Dashboard;
