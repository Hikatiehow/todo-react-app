import TextField from "@mui/material/TextField";
import ListItem from "@mui/material/ListItem";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import { useState } from "react";
export default function TodoListForm({ add }) {
  const [formText, setFormText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    add(formText);
    setFormText("");
  }

  function handleChange(e) {
    setFormText(e.target.value);
  }

  return (
    <ListItem disablePadding sx={{ mt: 1 }}>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <TextField
          id="new-todo"
          value={formText}
          onChange={handleChange}
          name="new-todo"
          label="New Todo"
          variant="outlined"
          fullWidth
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="create to do"
                    type="submit"
                    edge="end"
                  >
                    <CreateIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </form>
    </ListItem>
  );
}
