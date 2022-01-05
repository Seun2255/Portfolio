import React, { useState } from "react";
import style from "./styles/navbar.module.css";
import { Grid, Button, Typography } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";

const mediaQuery = window.matchMedia("(max-width: 600px)");
const menuIcon = mediaQuery.matches;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            variant={mediaQuery ? "h4" : "h2"}
            style={{
              color: "rgb(48, 109, 75)",
              fontWeight: 600,
              marginLeft: 2,
            }}
          >
            Seun
          </Typography>
        </Grid>
        {menuIcon ? (
          menuOpen ? (
            <div onClick={() => setMenuOpen(false)} style={{ zIndex: 5 }}>
              <Close
                sx={{ color: "rgb(48, 109, 75)" }}
                fontSize="large"
                style={{ marginRight: 10 }}
              />
            </div>
          ) : (
            <div onClick={() => setMenuOpen(true)}>
              <Menu
                sx={{ color: "rgb(48, 109, 75)" }}
                fontSize="large"
                style={{ marginRight: 10, zIndex: 2 }}
              />
            </div>
          )
        ) : (
          <Grid
            item
            justifyContent={"space-between"}
            alignItems={"flex-end"}
            direction={"row"}
            style={{ marginRight: 10 }}
          >
            <Button
              style={{
                color: "rgb(48, 109, 75)",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              About
            </Button>
            <Button
              style={{
                color: "rgb(48, 109, 75)",
                fontSize: 24,
                fontWeight: 600,
              }}
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
              href="mailto:seunemmanuel2255@gmail.com"
            >
              Contact Me
            </Button>
          </Grid>
        )}
      </Grid>
      {menuOpen && (
        <div className={style.down__menu}>
          <p className={style.menu__obj}>
            <a href="#about">About</a>
          </p>
          <hr className={style.divide} />
          <p className={style.menu__obj}>
            <a href="#portfolio">Portfolio</a>
          </p>
          <hr className={style.divide} />
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgb(48, 109, 75)",
              fontSize: 18,
              fontWeight: 600,
              marginBottom: 20,
              marginTop: 15,
            }}
            href="mailto:seunemmanuel2255@gmail.com"
          >
            Contact Me
          </Button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
