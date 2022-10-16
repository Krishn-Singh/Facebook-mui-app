import Navbar from "./Components/Navbar";
import { Feedbar } from "./Components/Feedbar";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import AddPost from "./Components/AddPost";
import { useState } from "react";
import { createTheme } from "@mui/system";


function App() {

  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
      <Box bgcolor={"Background.default"} color={"text.primary"}>
        < Navbar />
        <Grid container spacing={1} justifyContent="space-between" position="static">
          < Sidebar />
          < Feedbar />
          < Rightbar />
        </Grid>
        <AddPost />
      </Box>
  );
}

export default App;
