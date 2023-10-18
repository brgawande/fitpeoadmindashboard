import { Box, Button, HStack, Heading, Icon, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { sidebaritems } from "../hocs/constants";
import MenuIcon from "@mui/icons-material/Menu";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const Sidebarr = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 768);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setIsCollapsed(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Box
      className="sidebar"
      minH={"80vh"}
      backgroundColor="#040440"
      pt={"20px"}
      position={"relative"}
    >
      {!isCollapsed ? (
        <HStack justifyContent={"space-evenly"}>
          <Heading
            textAlign={"center"}
            alignItems={"center"}
            style={{ color: "white" }}
            size={"md"}
          >
            Dashboard
          </Heading>
          <MenuIcon
            sx={{ color: "white" }}
            onClick={toggleSidebar}
            // onClick={() => setIsCollapsed(!isCollapsed)}
          />
        </HStack>
      ) : (
        <VStack>
          <MenuIcon
            sx={{ color: "white" }}
            // onClick={() => setIsCollapsed(!isCollapsed)}
            onClick={toggleSidebar}
          />
        </VStack>
      )}

      <Sidebar
        className={isCollapsed ? "collapsed" : "expanded"}
        collapsed={isCollapsed}
        style={{
          height: "80%",
          paddingTop: "20px",
          // border: "2px solid white",
        }}
        backgroundColor="#040440"
      >
        <Menu
          style={{ color: "white" }}
          menuItemStyles={{
            button: {
              [`&:hover`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <MenuItem icon={<DashboardIcon />}>Dashboard</MenuItem>
          <SubMenu
            className="submenudrawes"
            alignItems={"center"}
            label="Product"
            icon={<CategoryIcon />}
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
    </Box>
  );
};

export default Sidebarr;
