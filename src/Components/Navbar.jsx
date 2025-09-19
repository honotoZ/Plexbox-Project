import { IoMdArrowDropdown } from "react-icons/io";
import plexLogo from '../assets/pleximg-removebg-preview.png';
import profilePic from '../assets/googleprofileIMG-removebg-preview.png';
import { FaCaretDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import ScrollWrapper from "./ScrollWrapper";

function Navbar() {

    return (
        <>
            <div className='myContainer'>
                {/* <ScrollWrapper animation="fade-right" delay={400}> <h1 style={{color:'white'}}>Hello World </h1>  </ScrollWrapper>      */}

                <div className='icon'>
                    <img className='logoImg' src={plexLogo} alt="" />
                    <input
                    type="text"
                    // className='searchIcon'
                    placeholder="Find Movies & TV"/>
                    <img className="searchLogo" src="src/assets/magnifying-glass-1976105_1280-removebg-preview.png" alt="" />
                    <span>All <FaCaretDown /></span>
                </div>
                <div className="listItems">
                    <div>Free Movies & TV</div>
                    <div>Live TV</div>
                    <div>Features</div>
                    <div>Download</div>
                </div>
                <div className='lastNav'>
                    <div className='lineIcon'></div>
                    <button>Open Plex</button>
                    <div className='customDropdown'>
                        <img className='profileImage' src={profilePic} alt="profileimage" />
                        <span><IoMdArrowDropdown className="downarrow" style={{color:'white'}}/></span>
                    </div>
                </div>
                <GiHamburgerMenu className="hamburger" />                
            </div>
        </>
    )
}
export default Navbar