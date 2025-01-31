import "../stylesheets/NavBar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
//import { DarkModeContext } from "../../context/darkModeContext";
//import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  //const { toggle, darkMode } = useContext(DarkModeContext);
  //const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left-navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="span-logo">AlumniUG</span>
        </Link>
        <HomeOutlinedIcon />
        
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input className="input-search" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right-navbar">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user-navbar">
        <img className="img-user-navbar" src="https://www.mmafacts.com/wp-content/uploads/2022/04/alex_pereira.png" alt=""/>
          <span className="span-user-navbar">Victor Chalen</span>
        </div>
        <div className="item-navbar">
        </div>
      </div>
    </div>
  );
};

export default NavBar;