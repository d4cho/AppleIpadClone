import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "../App.css";
import { makeStyles } from "@mui/styles";
import React from "react";


const MicrophoneCard = () => {

  const [init, setInit] = React.useState(0);
  const myRef = React.useRef();

  const scrollHandler = () => {
    const top = myRef.current.getBoundingClientRect().top.toFixed(0);
    setInit(top - 400);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);


  const useStyles = makeStyles(theme =>({
    card: {
      backgroundColor: "#f5f5f7",
      borderRadius: "30px",
      minHeight: "730px",
      boxShadow: "0px 0px 0px 0px",
      '@media (max-width: 900px)': {
        minHeight: "630px",
        paddingBottom:'60px'
      }
    },
    text: {
      fontSize: "50px",
      fontWeight: 600,
      color: "#26a334",
      lineHeight: 1.07143,
      letterSpacing: "0em",
      marginTop: "180px",
      paddingLeft: "50px",
      paddingRight: "10px",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      "@media (min-width: 600px) and (max-width: 900px)": {
        fontSize: "35px",
        marginTop:"120px",
        letterSpacing: "0em",
      },

    },
    image: {
      width: "85px",
      height: "110px",
      backgroundSize: "85px 110px",
      paddingTop: "40px",
      paddingLeft: "40px",
    },
    gradient: {
      background: `-webkit-linear-gradient(
        150deg,
        ${"rgb(38, 163, 52)"} ${init}%,
        ${"rgb(18, 137, 163)"} ${init + 200}%,
        ${"rgb(38, 163, 52)"} ${init + 300}%
    )`,
      "-webkit-background-clip": "text",
      "background-attachment": "fixed",
    },
  }));

  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <img
          className={classes.image}
          src={
            "https://www.apple.com/v/ipad-pro/ah/images/overview/even-more/microphone__bdmm94iw4brm_large_2x.png"
          }
        />
        <div className={classes.gradient} ref={myRef}>
          <Typography className={classes.text}>
            Five studio‑quality microphones record great sound when you shoot
            video, make music and more.
          </Typography>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default MicrophoneCard;
