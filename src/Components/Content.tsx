import React from "react";
import TaskList from "./TaskList";
import { Box, Button, Flex } from "theme-ui";
import { theme } from "../shared/theme";
import Icon from "../shared/Icon";

const Content = () => {
  return (
    <Box
      sx={{
        height: theme.sizes[5],
        width: theme.sizes[6],
      }}
    >
      <Flex
        mb={theme.spaces[2]}
        sx={{
          height: theme.sizes[7],
          padding: "12px 16px 0px 16px",
          position: "relative",
          alignItems: "center",
        }}
      >
        <Box
          p={[theme.sizes[16], theme.spaces[17]]}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: theme.sizes[2],
            fontWeight: theme.fontWeights[1],
            color: theme.colors.text[0],
          }}
        >
          Task 1
        </Box>
        <Button
          p={3}
          sx={{
            width: theme.sizes[2],
            height: theme.sizes[8],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.colors.text[0],
          }}
        >
          <Icon name="elipsis" />
        </Button>
      </Flex>
      <TaskList />
    </Box>
  );
};

export default Content;
