import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import "./LeftSidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import config from "../../config";

const useStyles = makeStyles((theme) => ({
  small: {
    width: "36px",
    height: "36px",
  },
  expandicon: {
    width: "34px",
    height: "34px",
    backgroundColor: "#e4e6eb",
  },
  sectionheading: {
    fontSize: "18px",
    color: "#65676b",
    fontWeight: "700",
  },
}));

function getYear() {
  return new Date().getFullYear();
}

function LeftSidebar() {
  const classes = useStyles();
  const userdata = config.userdata;
  const avatar = userdata.avatar;
  const name = userdata.name;
  const sitelogo = userdata.sitelogo;
  const sitecaption = userdata.sitecaption;
  return (
    <div className="fullheight" style={{ marginTop: "10px" }}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.small}>
              <img
                alt="dp"
                width="36px"
                src={`./resources/profilepic/${avatar}`}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img
              alt="dp"
              width="36px"
              src="./resources/commonimages/covid19.png"
            />
          </ListItemAvatar>
          <ListItemText primary="COVID-19 Information Centre" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img
              alt="dp"
              width="36px"
              src="./resources/commonimages/pages.png"
            />
          </ListItemAvatar>
          <ListItemText primary="Pages" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img
              alt="dp"
              width="36px"
              src="./resources/commonimages/friends.png"
            />
          </ListItemAvatar>
          <ListItemText primary="Friends" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img
              alt="dp"
              width="36px"
              src="./resources/commonimages/messenger.png"
            />
          </ListItemAvatar>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img
              alt="dp"
              width="36px"
              src="./resources/commonimages/groups.png"
            />
          </ListItemAvatar>
          <ListItemText primary="Groups" secondary="2 new" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img
              alt="dp"
              width="36px"
              src="./resources/commonimages/marketplace.png"
            />
          </ListItemAvatar>
          <ListItemText primary="Marketplace" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img
              alt="dp"
              width="36px"
              src="./resources/commonimages/videos.png"
            />
          </ListItemAvatar>
          <ListItemText primary="Videos" secondary="9+ new videos" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.expandicon}>
              <ExpandMoreIcon style={{ color: "black" }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="See more" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Typography className={classes.sectionheading}>
            Your shortcuts
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.small}>
              <img
                alt="uplus"
                width="36px"
                src={`./resources/commonimages/${sitelogo}`}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={sitecaption} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <img
              alt="games"
              width="36px"
              src="./resources/commonimages/games.png"
            />
          </ListItemAvatar>
          <ListItemText primary="Games" />
        </ListItem>
      </List>
      <List style={{ marginTop: "auto" }}>
        <ListItem>
          <Typography variant="caption" style={{ color: "#65676b" }}>
            Privacy · Terms · Advertising · Ad choices <br />
            Cookies . More . Facebook © {getYear()}
          </Typography>
        </ListItem>
      </List>
    </div>
  );
}

export default LeftSidebar;
