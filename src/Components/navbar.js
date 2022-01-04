import React from "react";
import style from "./styles/navbar.module.css";
import { Grid, Button, Typography } from "@mui/material";

function Navbar() {
  return (
    <div className={style.body}>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item>
          <Typography
            variant="h2"
            style={{ color: "rgb(48, 109, 75)", fontWeight: 600 }}
          >
            Seun
          </Typography>
        </Grid>
        <Grid
          item
          justifyContent={"space-between"}
          alignItems={"flex-end"}
          direction={"row"}
          style={{ marginRight: 10 }}
        >
          <Button
            style={{ color: "rgb(48, 109, 75)", fontSize: 24, fontWeight: 600 }}
          >
            About
          </Button>
          <Button
            style={{ color: "rgb(48, 109, 75)", fontSize: 24, fontWeight: 600 }}
          >
            Portfolio
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgb(48, 109, 75)",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Contact Me
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Navbar;
