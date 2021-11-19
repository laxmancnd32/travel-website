import { NavLink } from 'react-router-dom';
import HomeIcon from '../../../../assets/images/home.svg';
import BriefCaseIcon from '../../../../assets/images/briefcase.svg';
import CompassIcon from '../../../../assets/images/compass.svg';
import BellIcon from '../../../../assets/images/bell.svg';
import GearIcon from '../../../../assets/images/gear.svg';

import './style.scss';

const SIDENAV_COPY = [
  {
    name: 'HOME',
    url: '/home',
    icon: HomeIcon
  },
  {
    name: 'BRIEFCASE',
    url: '/business',
    icon: BriefCaseIcon
  },
  {
    name: 'COMPASS',
    url: '/navigate',
    icon: CompassIcon
  },
  {
    name: 'NOTIFICATIONS',
    url: '/notifications',
    icon: BellIcon
  },
  {
    name: 'SETTINGS',
    url: '/settings',
    icon: GearIcon
  }
]
const SideBar = (props) => {
    return (
      <div className="sidebar">
        <ul className="sidebar-list">
          {SIDENAV_COPY.map((item, index) => {
            return (
              <li>
                <NavLink className="navLink" activeClassName="active" id={`${item.name}-${index}`} exact to={item.url}>
                  <div>
                    <img src={item.icon} alt='sidebar-img'/>
                  </div>
                </NavLink>
              </li>
              
            )
          })}
        </ul>
      </div>
    )
  }
  
  export default SideBar;
  