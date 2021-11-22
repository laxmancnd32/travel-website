import { NavLink, useNavigate } from 'react-router-dom';
import LogoutIcon from '../../../../assets/images/log-out.svg';
import { SIDENAV_COPY } from '../../../constants.js';

import './style.scss';

const SideBar = (props) => {
  const navigate = useNavigate();
  
  const logout = () => {
    navigate('/login');
  }
    return (
      <div className="sidebar">
        <ul className="sidebar-list">
          {SIDENAV_COPY.map((item, index) => {
            return (
              <li>
                <NavLink className="navLink" activeClassName="active" id={`${item.name}-${index}`} to={item.url}>
                  <div>
                    <img src={item.icon} alt='sidebar-img'/>
                  </div>
                </NavLink>
              </li>
              
            )
          })}
        </ul>
        <div className="logout" onClick={logout}>
          <img src={LogoutIcon} alt="logout"/>
        </div>
      </div>
    )
  }
  
  export default SideBar;
  