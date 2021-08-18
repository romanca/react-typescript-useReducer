import React from "react";
import Content from "./Content";
import Header from "./Header";
import SideBar from "./SideBar";
import { Box, Flex } from "theme-ui";
import { theme } from "../shared/theme";

const Layout = () => {
  return (
    <Flex
      style={{
        height: theme.sizes[13],
      }}
    >
      <SideBar />
      <Box sx={{ width: theme.sizes[14], }}>
        <Header />
        <Content />
      </Box>
    </Flex>
  );
};

export default Layout;
