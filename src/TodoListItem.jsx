import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoListItem({ todo, remove, toggle }) {
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={remove}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense onClick={toggle}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.checked}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText
          id={labelId}
          primary={todo.text}
          sx={{
            textDecoration: todo.checked ? "line-through" : "none",
            color: "text.primary",
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}
