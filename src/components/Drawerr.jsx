import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Radio,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import CloseIcon from "@mui/icons-material/Close";
import { sidebaritems } from "../hocs/constants";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const Drawerr = ({ isOpen, onOpen, onClose }) => {
  const [placement, setPlacement] = React.useState("left");
  return (
    <>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bgColor={"#040440"} pt={"20px"}>
          <HStack justifyContent={"space-evenly"} textAlign={"center"}>
            <Heading
              textAlign={"center"}
              alignItems={"center"}
              style={{ color: "white" }}
              size={"md"}
            >
              Dashboard
            </Heading>
            <CloseIcon sx={{ color: "white" }} onClick={onClose} />
          </HStack>
          <VStack pt={"30px"}>
            <Sidebar backgroundColor="#040440">
              <Menu
                style={{
                  color: "white",
                }}
                menuItemStyles={{
                  button: {
                    [`&:hover`]: {
                      backgroundColor: "#13395e",
                      color: "#b6c8d9",
                    },
                  },
                }}
              >
                {/* <MenuItem>Dashboard</MenuItem> */}

                <SubMenu
                  className="submenudrawes"
                  alignItems={"center"}
                  label="Product"
                  icon={<DashboardIcon />}
                >
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    Product 1
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    Product 2
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    {" "}
                    Product 3
                  </MenuItem>
                </SubMenu>
                <SubMenu
                  className="submenudrawes"
                  alignItems={"center"}
                  label="Customers"
                  icon={<AccountBoxOutlinedIcon />}
                >
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    Product 1
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    Product 2
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    {" "}
                    Product 3
                  </MenuItem>
                </SubMenu>
                <SubMenu
                  className="submenudrawes"
                  alignItems={"center"}
                  label="Income"
                  icon={<AccountBalanceWalletOutlinedIcon />}
                >
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    Product 1
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    Product 2
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    {" "}
                    Product 3
                  </MenuItem>
                </SubMenu>
                <SubMenu
                  className="submenudrawes"
                  alignItems={"center"}
                  label="Promote"
                  icon={<HelpOutlineOutlinedIcon />}
                >
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    Product 1
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    Product 2
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    {" "}
                    Product 3
                  </MenuItem>
                </SubMenu>
                <SubMenu
                  className="submenudrawes"
                  alignItems={"center"}
                  label="Help"
                  icon={<AccountBoxOutlinedIcon />}
                >
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    Product 1
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    Product 2
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "#040440" }}>
                    {" "}
                    Product 3
                  </MenuItem>
                </SubMenu>
              </Menu>
            </Sidebar>
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Drawerr;
