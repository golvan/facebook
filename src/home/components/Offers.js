import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import config from "../../config";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "345",
    padding: "10px",
  },
  cardaction: { display: "flex" },
  actionbuttons: {
    flex: 1,
    width: "20px",
    color: "gray",
    textTransform: "default",
    padding: 0,
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const Offers = (props) => {
  const classes = useStyles();
  const { offers } = props;
  const userdata = config.userdata;
  if (!offers || offers.length === 0) return null;
  const offerName = offers[0].Name;
  const offerDesc = offers[0].ShortDescription;
  const offerClickURL = offers[0].ClickThroughURL;
  const offerImage = offers[0].ImageURL;
  const offerTitle =
    offers[0].FBAdLogoTitle !== ""
      ? offers[0].FBAdLogoTitle
      : userdata.defaultfeedcaption;
  const offerLogo =
    offers[0].FBAdLogoUrl !== ""
      ? offers[0].FBAdLogoUrl
      : `./resources/feeds/${userdata.defaultfeedlogo}`;

  return userdata.posts.map((post, i) => (
    <div
      key={i}
      style={{
        marginTop: "20px",
        width: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        overflowY: "visible",
      }}
    >
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <img alt="dp" width="40px" src={`${offerLogo}`} />
            </Avatar>
          }
          style={{ paddingTop: 0 }}
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
          title={<span style={{ fontSize: "16px" }}>{offerTitle}</span>}
          subheader={
            <div>
              <span>{post.time}</span>
              <img
                src="./resources/commonimages/publicicon.png"
                alt="pub"
                style={{
                  width: "12px",
                  marginLeft: "10px",
                  color: "gray",
                }}
              />
            </div>
          }
        />
        <CardContent style={{ paddingTop: 0 }}>{offerDesc}</CardContent>
        <a href={offerClickURL} target="_blank" rel="noreferrer">
          <CardMedia
            className={classes.media}
            image={`${offerImage}`}
            title={`${offerName}`}
          />
        </a>
        <CardActions disableSpacing>
          <Divider />
          <IconButton aria-label="add to favorites" style={{ padding: 0 }}>
            {post.reactions.map((reaction, i) => (
              <img
                key={i}
                style={{
                  width: "20px",
                  border: "2px solid #fff",
                  position: "relative",
                  right: `${4 * i}px`,
                  zIndex: 10 - i,
                }}
                src={`./resources/commonimages/${reaction}.svg`}
                alt=""
              />
            ))}
          </IconButton>
          <span style={{ color: "gray", flexGrow: 1 }}>{post.likes}</span>
          <span style={{ color: "gray" }}>{`${post.comments} comments`}</span>
          <span
            style={{ color: "gray", marginLeft: "10px" }}
          >{`${post.shares} share`}</span>
        </CardActions>
        <Divider />
        <CardActions disableSpacing className={classes.cardaction}>
          <Button
            variant="text"
            className={classes.actionbuttons}
            startIcon={
              <img
                alt="a"
                style={{ width: "20px" }}
                src="./resources/commonimages/likeaction.png"
              />
            }
          >
            <span className="btntxt">Like</span>
          </Button>
          <Button
            variant="text"
            className={classes.actionbuttons}
            startIcon={
              <img
                alt="b"
                style={{ width: "20px" }}
                src="./resources/commonimages/commentaction.png"
              />
            }
          >
            <span className="btntxt">Comment</span>
          </Button>
          <Button
            variant="text"
            className={classes.actionbuttons}
            startIcon={
              <img
                alt="c"
                style={{ width: "20px" }}
                src="./resources/commonimages/shareaction.png"
              />
            }
          >
            <span className="btntxt">Share</span>
          </Button>
        </CardActions>
      </Card>
    </div>
  ));
};

export default Offers;
