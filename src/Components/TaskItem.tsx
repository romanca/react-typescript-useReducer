import React from "react";
import { Box, Flex } from "theme-ui";
import { theme } from "../shared/theme";

const TaskItem = () => {
  return (
    <Box mt={theme.spaces[18]} sx={{ width: theme.sizes[6] }}>
      <Box
        m={[theme.spaces[0], theme.spaces[2]]}
        p={[theme.spaces[14], theme.spaces[10]]}
        sx={{
          alignItems: "center",
        }}
      >
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "center",
            borderBottom: `1px solid ${theme.colors.border[2]}`,
            width: theme.sizes[6],
          }}
        >
          <Flex
            sx={{
              width: theme.sizes[10],
              height: theme.sizes[18],
              padding: theme.spaces[2],
              cursor: "pointer",
              outline: "none",
              border: "none",
              color: theme.colors.text[2],
              fontSize: theme.sizes[2],
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="fa fa-circle-thin" />
          </Flex>
          <Box
            p={[theme.spaces[12], theme.spaces[13]]}
            sx={{
              width: theme.sizes[6],
              fontSize: theme.sizes[1],
              color: theme.colors.text[1],
            }}
          >
            <Box
              sx={{
                fontSize: theme.sizes[1],
                color: theme.colors.text[1],
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              title1
            </Box>
          </Box>
          <Flex
            sx={{
              cursor: "pointer",
              height: theme.sizes[17],
              width: theme.sizes[17],
              color: theme.colors.text[2],
              textAlign: "center",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              outline: "none",
              fontSize: theme.sizes[4],
              background: "transparent",
            }}
          >
            <i className="fa fa-star-o" />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default TaskItem;
