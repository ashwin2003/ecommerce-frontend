import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/ashwin-jagarwal-786799187/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dgsjlfsoi/image/upload/v1658649019/avatars/Ashwin_cw6d8i.jpg"
              alt="Founder"
            />
            <Typography>Ashwin Jagarwal</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit Linkedin
            </Button>
            <span>
              This is a ShopZoid Website as my Personal Project. Feel free to
              reach out.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
