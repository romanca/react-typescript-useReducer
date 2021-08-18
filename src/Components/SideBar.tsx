import React from "react";
import { Flex, Box, Input, Button } from "theme-ui";
import Icon from "../shared/Icon";
import { theme } from "../shared/theme";

const SideBar = () => {
  return (
    <Box
      sx={{
        width: theme.sizes[20],
        background: theme.colors.background[3],
        height: theme.sizes[13],
      }}
    >
      <Box
        style={{
          width: theme.sizes[6],
          background: theme.colors.background[2],
          height: theme.sizes[9],
          borderBottom: `1px solid ${theme.colors.border[1]}`,
        }}
      ></Box>
      <Flex
        mt={theme.spaces[13]}
        sx={{
          height: theme.sizes[15],
          width: theme.sizes[6],
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Button
          ml={theme.spaces[2]}
          bg={theme.colors.background[2]}
          sx={{
            width: theme.sizes[10],
            height: theme.sizes[10],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 0 1px #ededed",
            cursor: "pointer",
          }}
        >
          <Icon
            name="leftArrow"
            style={{ fontSize: "1.6rem", color: "#465efc", marginLeft: -3 }}
          />
        </Button>
      </Flex>
      <Flex
        p={[theme.spaces[11], theme.spaces[13]]}
        sx={{
          cursor: "pointer",
          boxSizing: "border-box",
          height: theme.sizes[16],
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Flex
          sx={{
            width: theme.sizes[17],
            height: theme.sizes[17],
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="gg" />
        </Flex>
        <Flex
          sx={{
            width: theme.sizes[12],
            height: theme.sizes[6],
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box
            m={[theme.spaces[14], theme.spaces[10]]}
            sx={{
              color: theme.colors.text[1],
              fontSize: theme.sizes[1],
              fontWeight: theme.fontWeights[2],
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Task 1
          </Box>
        </Flex>
        <Box
          p={[theme.spaces[14], theme.spaces[15]]}
          sx={{
            color: theme.colors.text[1],
            fontSize: theme.sizes[1],
          }}
        >
          3
        </Box>
      </Flex>
      <Flex
        p={[theme.spaces[14], theme.spaces[13]]}
        sx={{
          cursor: "pointer",
          boxSizing: "border-box",
          height: theme.sizes[16],
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Flex
          sx={{
            color: theme.colors.text[1],
            width: theme.sizes[17],
            height: theme.sizes[17],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: theme.sizes[2],
          }}
        >
          +
        </Flex>
        <Flex
          mt={theme.spaces[1]}
          sx={{
            width: theme.sizes[12],
            height: theme.sizes[6],
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="New list"
            p={[
              theme.spaces[16],
              theme.spaces[16],
              theme.spaces[17],
              theme.spaces[16],
            ]}
            mt={theme.spaces[15]}
            sx={{
              width: theme.sizes[6],
              boxSizing: "border-box",
              fontWeight: theme.fontWeights[3],
              color: theme.colors.text[1],
              fontSize: theme.sizes[1],
              outline: "none",
              border: "none",
              background: "transparent",
            }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SideBar;
