import "../stylesheets/LeftBar.css";
import Friends from "../assets/1.png";
import Groups from "../assets/2.png";
import Market from "../assets/3.png";
import Watch from "../assets/4.png";
import Memories from "../assets/5.png";
import Events from "../assets/6.png";
import Gaming from "../assets/7.png";
import Gallery from "../assets/8.png";
import Videos from "../assets/9.png";
import Messages from "../assets/10.png";
import Tutorials from "../assets/11.png";
import Courses from "../assets/12.png";
import Fund from "../assets/13.png";
import { useContext } from "react";

const LeftBar = () => {

  //const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu-one">
          <div className="user">
            <img className="img-user" src="" alt=""/>
            <span className="span-user">Juan Pueblo</span>
          </div>
          <div className="item-one">
            <img className="img-one" src={Friends} alt="" />
            <span className="span-one" >Friends</span>
          </div>
          <div className="item-one">
            <img className="img-one" src={Groups} alt="" />
            <span className="span-one">Groups</span>
          </div>
          <div className="item-one">
            <img className="img-one" src={Market} alt="" />
            <span className="span-one">Marketplace</span>
          </div>
          <div className="item-one">
            <img className="img-one" src={Watch} alt="" />
            <span className="span-one">Watch</span>
          </div>
          <div className="item-one">
            <img className="img-one" src={Memories} alt="" />
            <span className="span-one">Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu-two">
          <span>Your shortcuts</span>
          <div className="item-two">
            <img className="img-two"src={Events} alt="" />
            <span className="span-two">Events</span>
          </div>
          <div className="item-two">
            <img className="img-two" src={Gaming} alt="" />
            <span className="span-two">Gaming</span>
          </div>
          <div className="item-two">
            <img className="img-two" src={Gallery} alt="" />
            <span className="span-two">Gallery</span>
          </div>
          <div className="item-two">
            <img className="img-two" src={Videos} alt="" />
            <span className="span-two">Videos</span>
          </div>
          <div className="item-two">
            <img className="img-two" src={Messages} alt="" />
            <span className="span-two">Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu-three">
          <span>Others</span>
          <div className="item-three">
            <img className="img-three"src={Fund} alt="" />
            <span className="span-three">Fundraiser</span>
          </div>
          <div className="item-three">
            <img className="img-three" src={Tutorials} alt="" />
            <span className="span-three">Tutorials</span>
          </div>
          <div className="item-three">
            <img className="img-three" src={Courses} alt="" />
            <span className="span-three">Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;