import { useState, useEffect } from "react";
import List from "@mui/material/List";
import TodoListItem from "./TodoListItem";
import TodoListForm from "./TodoListForm";
import Typography from "@mui/material/Typography";
import { v4 as uuid } from "uuid";
import { Box } from "@mui/material";

const getInitialData = () => JSON.parse(localStorage.getItem("todos")) || [];

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function removeTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  }

  function addTodo(todoText) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: todoText, id: uuid(), checked: false },
    ]);
  }

  function toggleTodoItem(id) {
    setTodos((prevTodos) =>
      prevTodos.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <Box
        sx={{
          m: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
          Todo List
        </Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 600,
            bgcolor: "background.paper",
            padding: { xs: 1, sm: 2 },
          }}
        >
          {todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              remove={() => removeTodo(todo.id)}
              toggle={() => toggleTodoItem(todo.id)}
            />
          ))}
          <TodoListForm add={addTodo} />
        </List>
      </Box>
    </>
  );
}
