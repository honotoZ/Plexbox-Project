import React from "react";
import { ImAndroid } from "react-icons/im";
import { FaApple } from "react-icons/fa";
import { SiRoku } from "react-icons/si";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import googlePlayBadge from "../assets/Google_Play_Store_badge_EN.svg.webp";
import appStoreBadge from "../assets/Download_on_the_App_Store_Badge.svg.webp";
import { storeRatings } from "../utils/constant";

function MainContent() {
  return (
    <>
      <div className="mainbody-container">
        <div className="appstore">
          {/* You should not repeat  > React */}
          {storeRatings.map((element) => {
            const Icon=element.icon
            return (
              <div className="appstore1">
                <div className="appstoreA">
                  <Icon className="android" />
                  <span>App Store</span>
                </div>
                <div className="appstoreB">
                   {Array(4).fill(<FaStar className="star" />)}                  
                  <FaStarHalfAlt className="halfstar" />
                </div>
                <div className="appstoreC">
                  <span>{element.ratings}</span>
                </div>
                <div className="appstoreD">
                  <span>{element.subRatings}</span>
                </div>
              </div>
            );
          })}

          <div className="appstore4">
            <div className="appstoreAAAA">
              <span>Download Now</span>
            </div>
            <img src={googlePlayBadge} alt="google play" />
            <img src={appStoreBadge} alt="apple store" />
          </div>
        </div>
      </div>
    </>
  );
}
export default MainContent;
