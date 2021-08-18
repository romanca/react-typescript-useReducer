import React from "react";
import SubmitTaskForm from "./SubmitTaskForm";
import TaskItem from "./TaskItem";
import { Box } from "theme-ui";

const TaskList = () => {
  return (
    <Box>
      <SubmitTaskForm />
      <TaskItem />
    </Box>
  );
};

export default TaskList;
