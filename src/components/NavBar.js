import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./../ThemeContext";
import Grid from "@mui/material/Grid";

function NavBar() {
  const history = useHistory();
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log("theme", theme);
  const light = { backgroundColor: "#1976d2" };
  const dark = { backgroundColor: "#000000" };
  return (
    <AppBar position="static" style={theme === "light" ? light : dark}>
      <Toolbar>
        <Grid container>
          <Grid item xs={8}>
            <Box>
              <Button color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => history.push("/movies")}>
                Movies
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/reducertask")}
              >
                Reducer Task
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/basic-form")}
              >
                Basic Form
              </Button>
              <Button color="inherit" onClick={() => history.push("/add")}>
                Add Movies <AddCircleOutlineIcon />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Button
              color="inherit"
              onClick={toggleTheme}
              className="text-right"
            >
              {theme === "light" ? "light mode" : "dark mode"}
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
