import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  menuToolbarContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 22,
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "50px",
    width: "160px",
  },
  ifcBackGround: {
    height: "400px",
    width: "400px",
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            // border: "1px solid aqua",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Paper elevation={1} className={classes.ifcBackGround}>
            <img
              style={{ width: 350 }}
              src={
                "https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/01/img-UCLH.jpg"
              }
            />
          </Paper>
        </div>
      </div>
      <AppBar elevation={0} position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            BUILDERS
          </Typography>
          <Button
            variant="contained"
            color="primaryLight"
            className={classes.button}
            startIcon={<ShareIcon />}
            size="smalls"
          >
            Share
          </Button>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <div className={classes.menuToolbarContainer}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="secondary"
          aria-label="menu"
          onClick={() => {
            setOpenLeft(!openLeft);
            console.log("open left is clicked");
          }}
        >
          <MenuIcon />
        </IconButton>

        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => {
            console.log("open right is clicked");
            setOpenRight(!openRight);
          }}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <div className={classes.menuToolbarContainer}>
        <div style={{ position: "relative", left: 0 }}>
          {openLeft ? (
            <div
              style={{
                width: 240,
                height: 300,
                border: "4px solid lime",
                marginLeft: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Paper
                elevation={3}
                className={classes.paper}
                style={{ height: 40 }}
              >
                <div>ifc elements</div>
              </Paper>

              <Paper elevation={3} className={classes.paper}>
                <div>workflow menu 1</div>
              </Paper>

              <Paper elevation={3} className={classes.paper}>
                <div>workflow menu 2</div>
              </Paper>
            </div>
          ) : null}
        </div>
        <div>
          {openRight ? (
            <div
              style={{
                width: 240,
                height: 500,
                border: "4px solid lime",
                marginRight: "34px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                zIndex: "100",
              }}
            >
              <Paper
                elevation={3}
                className={classes.paper}
                style={{ height: 20 }}
              >
                <div>element data</div>
              </Paper>
              <Paper
                elevation={3}
                className={classes.paper}
                style={{ height: 40 }}
              >
                <div>parameters</div>
              </Paper>
              <Paper
                elevation={3}
                className={classes.paper}
                style={{ height: 20 }}
              >
                <div>comments</div>
              </Paper>
              <Paper elevation={3} className={classes.paper}>
                <div>...</div>
              </Paper>

              <Paper elevation={3} className={classes.paper}>
                <div>...</div>
              </Paper>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;