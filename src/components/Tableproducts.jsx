import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import abstract from "../assets/abstract3d.jpg";

import { Box, Heading, Input } from "@chakra-ui/react";
import { tablecontent } from "../hocs/constants";

const Tableproducts = () => {
  return (
    <Box p={["10px 1%", "10px 2%", "10px 3%"]} bgColor={"#f5f6f8"}>
      <Box
        // border={"2px solid black"}
        borderRadius={"10px"}
        bgColor={"#ffffff"}
        p={"10px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading size={"md"}>Product Sell</Heading>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Input w={["100px", "200px"]} type="search" placeholder="Search" />
          <Input
            w={["100px", "200px"]}
            type="text"
            placeholder="Last 30 Days"
          />
        </Box>
      </Box>

      {/* table */}
      <Box
        h={"40vh"}
        // width={"100%"}
        bgColor={"#ffffff"}
        boxShadow={"md"}
        overflowX={"auto"}
        // border={"2px solid black"}
      >
        <TableContainer overflowX={"auto"} w={["100vw", "full"]}>
          <Table variant="simple" overflowX={"auto"}>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Product Name</Th>
                <Th>Stock</Th>
                <Th>Price</Th>
                <Th>Total Sales</Th>
              </Tr>
            </Thead>
            {tablecontent.map((item) => (
              <TableBoady
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                stock={item.stock}
                price={item.price}
                sales={item.sales}
                imgsrc={item.imgsrc}
              />
            ))}
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Tableproducts;

function TableBoady({ id, title, subtitle, stock, price, sales, imgsrc }) {
  return (
    <Tbody>
      <Tr>
        <Td>
          <HStack>
            <Image
              boxSize={"80px"}
              minW={"120px"}
              objectFit={"cover"}
              src={imgsrc}
              borderRadius={"12px"}
              alt={id}
            />
            <Box>
              <Heading size={"md"}>{title}</Heading>
              <Text>{subtitle}</Text>
            </Box>
          </HStack>
        </Td>
        <Td>{stock}</Td>
        <Td textAlign={"center"}>{price}</Td>
        <Td textAlign={"center"}>{sales}</Td>
      </Tr>
    </Tbody>
  );
}
