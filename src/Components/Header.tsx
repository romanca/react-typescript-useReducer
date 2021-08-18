import React from "react";
import { Flex, Box, Input } from "theme-ui";
import Icon from "../shared/Icon";
import { theme } from "../shared/theme";

const Header = () => {
  const [active, setActive] = React.useState<boolean>(false);
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleActiveInput = () => {
    setActive(true);
    setVisible(true);
  };

  const handleDeactiveInput = () => {
    setActive(false);
    setVisible(false);
  };

  return (
    <Flex
      sx={{
        width: theme.sizes[6],
        background: theme.colors.background[0],
        height: theme.sizes[9],
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Flex
        sx={{
          width: theme.sizes[6],
          maxWidth: theme.sizes[19],
          background: theme.colors.background[1],
          margin: "8px auto",
          height: theme.sizes[10],
          borderRadius: theme.radii[1],
        }}
      >
        <Flex
          sx={{
            width: theme.sizes[11],
            borderTopLeftRadius: theme.radii[1],
            borderBottomLeftRadius: theme.radii[1],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: theme.colors.background[1],
            border: `1px solid ${theme.colors.border[0]}`,
          }}
        >
          <Icon name="search" />
        </Flex>
        <Flex style={{ width: theme.sizes[12] }}>
          <Input
            sx={{
              outline: "none",
              border: "none",
              width: theme.sizes[12],
              height: theme.sizes[6],
              borderRadius: theme.radii[0],
              background: active
                ? theme.colors.background[2]
                : theme.colors.background[1],
              paddingLeft: 10,
            }}
            onFocus={handleActiveInput}
            onBlur={handleDeactiveInput}
            placeholder={active ? "Search" : undefined}
          />
          {visible ? (
            <Flex
              sx={{
                width: theme.sizes[11],
                height: theme.sizes[6],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: theme.colors.background[2],
                borderTopRightRadius: theme.radii[1],
                borderBottomRightRadius: theme.radii[1],
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  transform: "rotate(40deg)",
                  fontWeight: theme.fontWeights[2],
                }}
              >
                +
              </Box>
            </Flex>
          ) : (
            <Box
              sx={{
                width: theme.sizes[11],
                height: theme.sizes[6],
                background: theme.colors.background[1],
                borderTopRightRadius: theme.radii[1],
                borderBottomRightRadius: theme.radii[1],
              }}
            ></Box>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
