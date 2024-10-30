import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Icon from "@mui/material/Icon";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Button } from "@mui/material";

export default function NavBar({ toggleTheme, darkMode }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Icon
            size="large"
            edge="start"
            color="inherit"
            aria-label="hidden"
            sx={{ mr: 2 }}
          >
            <TaskAltIcon />
          </Icon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React TodoList App
          </Typography>
          <Button onClick={toggleTheme} sx={{ color: "inherit" }}>
            {darkMode ? (
              <>
                <LightModeIcon />
                <Typography
                  sx={{
                    display: { xs: "none", sm: "inline" }, // Hide below 'sm' breakpoint
                  }}
                >
                  Light Mode
                </Typography>
              </>
            ) : (
              <>
                <DarkModeIcon />
                <Typography
                  sx={{
                    display: { xs: "none", sm: "inline" }, // Hide below 'sm' breakpoint
                  }}
                >
                  Dark Mode
                </Typography>
              </>
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
