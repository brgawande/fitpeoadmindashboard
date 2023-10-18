import { Box, HStack, Heading, Input, useDisclosure } from "@chakra-ui/react";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawerr from "../components/Drawerr";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w={"100%"} bgColor={"#f5f6f8"}>
      <HStack
        justifyContent={"space-between"}
        p={["10px 2%", "10px 2%", "10px 3%"]}
        // border={"2px solid black"}
        alignItems={"center"}
      >
        <Box
          onClick={onOpen}
          className="menubuttonmobile"
          display={["block", "block", "none", "none"]}
        >
          <MenuIcon />
        </Box>
        <Box>
          <Heading size={"md"}>Hello Shahrukh👋</Heading>
        </Box>
        <Box>
          <Input
            type="search"
            placeholder="Search"
            border={"0.5px solid #bbbbbb"}
            bgColor={"#ffffff"}
            width={["150px", "200px"]}
          />
        </Box>
      </HStack>
      <Drawerr isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Header;
