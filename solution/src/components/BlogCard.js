import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useNavigate } from "react-router";
import { margin } from "@mui/system";

export default function BlogCard({ item, index }) {
  const [likeNumber, setLikeNumber] = useState(0);
  const [likeColor, setLikeColor] = useState();
  const [click, setClick] = useState(true);
  const navigate = useNavigate();

  ///like make red and +1 function
  const handleLike = () => {
    if (click) {
      setLikeNumber(likeNumber + 1);
      setLikeColor("red");
      setClick(!click);
    } else {
      setLikeNumber(likeNumber - 1);
      setLikeColor();
      setClick(!click);
    }
  };

  const handleClick = () => {
    navigate("/details", { state: { item } });
  };

  return (
    <Card
      sx={{
        width: 350,
        height: 500,
        boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        margin: "5rem",
      }}
    >
      <div style={{ cursor: "pointer" }} onClick={handleClick}>
        <CardMedia
          component="img"
          height="200"
          image={item.imageURL}
          alt={item.title}
          objectfit="contain"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              height: "35%",
              display: "block",
              backgroundColor: "#e0f7fa",
              padding: "0.5rem",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                paddingTop: "1rem",
                textAlign: "center",
                color: "#00000",
              }}
            >
              <h2>{`${item.title}`.substring(0, 20) + `..`}</h2>
              <h6 style={{ color: "grey" }}>{item.date}</h6>
            </div>
            {`${item.content}`.substring(0, 40) + `...`}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "black", textAlign: "start", mt: 2 }}
          >
            <IconButton sx={{ color: "black", p: 0 }}>
              <AccountCircleIcon fontSize="small" />
            </IconButton>
            {item.author}
          </Typography>
        </CardContent>
      </div>

      <CardActions disableSpacing>
        <IconButton
          onClick={() => {
            handleLike();
          }}
          sx={{ color: `${likeColor}` }}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        <span>{likeNumber}</span>
        <IconButton aria-label="comment">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <span>1</span>
      </CardActions>
    </Card>
  );
}
