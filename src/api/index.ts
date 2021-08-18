import { getLsItem, updateLsItem } from "../shared/localStorage";

const TODOS_LS_KEY = "TODOS_LS_KEY";
const LABELS_LS_KEY = "LABELS_LS_KEY";

export function getTodos(): Promise<Task[]> {
  const todos = getLsItem(TODOS_LS_KEY, []);
  return Promise.resolve(todos);
}

export function getLabels(): Promise<List[]> {
  const labels = getLsItem(LABELS_LS_KEY, []);
  return Promise.resolve(labels);
}

export function createLabel(label: Omit<List, "id">): Promise<List> {
  const newLabel = {
    ...label,
    id: Date.now(),
    favorite: false,
  };
  updateLsItem(
    LABELS_LS_KEY,
    (current) => {
      return [...current, newLabel];
    },
    []
  );
  return Promise.resolve(newLabel);
}

export function removeLabel(id: number): Promise<number> {
  updateLsItem(
    LABELS_LS_KEY,
    (current) => {
      return current.filter((label: List) => label.id !== id);
    },
    []
  );
  return Promise.resolve(id);
}

export function editLabel(
  label: Partial<List> & { id: number }
): Promise<List> {
  updateLsItem(
    LABELS_LS_KEY,
    (current) => {
      return current.map((i: List) => (i.id === label.id ? label : i));
    },
    []
  );
  return new Promise(async (resolve, reject) => {
    try {
      const labels = await getLabels();
      const foundLabel = labels.find((i) => i.id === label.id);
      if (foundLabel) {
        resolve(foundLabel);
      } else {
        reject({ msg: "does not exist" });
      }
    } catch (error) {
      reject({ msg: "internal", error });
    }
  });
}
export function favoriteLabel(
  selectedLabels: Partial<List> & { id: number }
): Promise<List> {
  updateLsItem(
    LABELS_LS_KEY,
    (current) => {
      return current.map((i: List) =>
        i.id === selectedLabels.id ? { ...i, favorite: !i.favorite } : i
      );
    },
    []
  );
  return new Promise(async (resolve, reject) => {
    try {
      const labels = await getLabels();
      const selected = labels.find((i) => i.id === selectedLabels.id);
      if (selected) {
        resolve(selected);
      } else {
        reject({ msg: "does not exist" });
      }
    } catch (error) {
      reject({ msg: "internal", error });
    }
  });
}

export function createTodo(todo: Omit<Task, "id">): Promise<Task> {
  const newTodo = {
    ...todo,
    id: Date.now(),
    complete: false,
  };
  updateLsItem(
    TODOS_LS_KEY,
    (current) => {
      return [...current, newTodo];
    },
    []
  );
  return Promise.resolve(newTodo);
}

export function removeTodo(id: number): Promise<number> {
  updateLsItem(
    TODOS_LS_KEY,
    (current) => {
      return current.filter((todo: Task) => todo.id !== id);
    },
    []
  );
  return Promise.resolve(id);
}

export function editTodo(todo: Partial<Task> & { id: number }): Promise<Task> {
  updateLsItem(
    TODOS_LS_KEY,
    (current) => {
      return current.map((i: Task) =>
        i.id === todo.id ? { ...i, ...todo } : i
      );
    },
    []
  );
  return new Promise(async (resolve, reject) => {
    try {
      const todos = await getTodos();
      const foundTodo = todos.find((i) => i.id === todo.id);
      if (foundTodo) {
        resolve(foundTodo);
      } else {
        reject({ msg: "does not exist" });
      }
    } catch (error) {
      reject({ msg: "internal", error });
    }
  });
}
export function completeTodo(
  selectedTodo: Partial<Task> & { id: number }
): Promise<Task> {
  updateLsItem(
    TODOS_LS_KEY,
    (current) => {
      return current.map((i: Task) =>
        i.id === selectedTodo.id ? { ...i, complete: !i.complete } : i
      );
    },
    []
  );
  return new Promise(async (resolve, reject) => {
    try {
      const todos = await getTodos();
      const selected = todos.find((i) => i.id === selectedTodo.id);
      if (selected) {
        resolve(selected);
      } else {
        reject({ msg: "does not exist" });
      }
    } catch (error) {
      reject({ msg: "internal", error });
    }
  });
}
