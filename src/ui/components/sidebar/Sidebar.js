import "./Sidebar.css";
import { cycle, dumbel, medit, swim } from '../../../assets/icons/index';

function Sidebar(props) {
    return(
        <div className="sidebar container">
            <nav className="sidebar nav">
                <div className="sidebar icon">
                    <img src={medit} alt='medit icon' />
                </div>
                <div className="sidebar icon">
                    <img src={swim} alt='swim icon' />
                </div>
                <div className="sidebar icon">
                    <img src={cycle} alt='cycle icon' />
                </div>
                <div className="sidebar icon">
                    <img src={dumbel} alt='dumbel icon' />
                </div>
            </nav>
            <p className="sidebar copyright">Copyright, SportSee 2020</p>
        </div>
    )
}

export default Sidebar;