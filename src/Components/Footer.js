import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailIcon from "@mui/icons-material/Mail";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_left">
        <div className="footer_column">
          <h3>Pages</h3>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/top250movies">
            <p>Top Movies</p>
          </Link>
          <Link to="/top250series">
            <p>Top Series</p>
          </Link>
          <Link to="/theatre">
            <p>Theatre</p>
          </Link>
        </div>
        <div className="footer_column">
          <h3>Resources</h3>
          <a href="https://mui.com/">MUI Icons</a>
          <a href="https://react-icons.github.io/react-icons/">React Icons</a>
          <a href="https://imdb-api.com/">IMDb-API</a>
          <a href="https://undraw.co/">unDraw</a>
        </div>
      </div>
      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_icons">
          <WhatsAppIcon className="footer_icon footer_icon whatsapp" />
          <TelegramIcon className="footer_icon footer_icon telegram" />
          <MailIcon className="footer_icon footer_icon mail" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
