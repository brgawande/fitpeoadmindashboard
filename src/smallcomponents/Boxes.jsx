import {
  Box,
  Grid,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import image from "../assets/iamgess.png";
import { boxes } from "../hocs/constants";

const Boxes = () => {
  return (
    <Grid
      // border={"2px solid black"}
      p={["20px 5%", "20px 2%", "20px 3%"]}
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
      bgColor={"#f5f6f8"}
      rowGap={"10px"}
      columnGap={"30px"}
    >
      {boxes.map((item, index) => (
        <Box
          bgColor={"#ffffff"}
          p={"15px 20px"}
          borderRadius={"10px"}
          boxShadow={"md"}
          key={index}
        >
          <HStack>
            <VStack
              h={"100px"}
              w={"100px"}
              bgColor={item.bgcolor}
              borderRadius={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image boxSize="50px" src={item.imgsrc} />
            </VStack>
            <Box>
              <Text>{item.title}</Text>
              <Heading size={"md"}>{item.price}</Heading>
              <Text>{item.subtitle}</Text>
            </Box>
          </HStack>
        </Box>
      ))}
    </Grid>
  );
};

export default Boxes;
