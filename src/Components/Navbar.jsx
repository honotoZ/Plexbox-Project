import { IoMdArrowDropdown } from "react-icons/io";
import plexLogo from '../assets/pleximg-removebg-preview.png';
import profilePic from '../assets/googleprofileIMG-removebg-preview.png';

function Navbar() {
    
    return (
        <>
            <div className='myContainer'>
                <div className='icon'>
                    <img className='logoImg' src={plexLogo} alt="" />
                    <input
                    type="text"
                    className='searchIcon'
                    placeholder="Find Movies & TV"/>
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
            </div>
        </>
    )
}
export default Navbar