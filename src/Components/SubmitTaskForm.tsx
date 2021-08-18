import React from "react";
import { Box, Flex, Button, Input } from "theme-ui";
import { theme } from "../shared/theme";

const SubmitTaskForm = () => {
  const [active, setActive] = React.useState(false);
  const [value, setValue] = React.useState<string>("");

  const handleActiveInput = () => {
    setActive(true);
  };

  const handleDeactiveInput = () => {
    setActive(false);
    setValue("");
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Box sx={{ width: theme.sizes[6] }}>
      <Box
        m={[theme.spaces[14], theme.spaces[17]]}
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
          <Button
            p={1}
            sx={{
              width: theme.sizes[10],
              height: theme.sizes[10],
              flexShrink: 0,
              cursor: "pointer",
              color: theme.colors.text[2],
              fontSize: theme.sizes[2],
            }}
          >
            {active ? <i className="fa fa-circle-thin" /> : "+"}
          </Button>
          <Input
            onFocus={handleActiveInput}
            onBlur={handleDeactiveInput}
            placeholder="Add a task"
            value={value}
            onChange={handleChange}
            p={[theme.spaces[12], theme.spaces[13]]}
            sx={{
              // padding: "16px 12px",
              width: theme.sizes[6],
              border: "none",
              outline: "none",
              fontSize: theme.sizes[1],
              color: theme.colors.text[1],
              background: "transparent",
            }}
          />
          {value && (
            <Button
              sx={{
                height: theme.sizes[10],
                width: theme.sizes[7],
                padding: "0 10px",
                fontSize: theme.sizes[3],
                fontWeight: theme.fontWeights[4],
                textAlign: "right",
                cursor: "pointer",
                background: "transparent",
                color: theme.colors.text[1],
              }}
            >
              ADD
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default SubmitTaskForm;
