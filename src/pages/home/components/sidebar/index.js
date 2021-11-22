import { NavLink, useNavigate } from 'react-router-dom';
import LogoutIcon from '../../../../assets/images/log-out.svg';
import StLogo from '../../../../assets/images/st-logo.svg';
import { SIDENAV_COPY } from '../../../constants.js';

import './style.scss';

const SideBar = (props) => {
  const navigate = useNavigate();
  
  const logout = () => {
    navigate('/login');
  }
    return (
      <div className="sidebar">
        <img className="logo" src={StLogo} alt="logo" />
        <div className="sidebar-list">
          {SIDENAV_COPY.map((item, index) => {
            return (
              <div className="list-wrapper">
                <NavLink className="navLink" activeClassName="active" id={`${item.name}-${index}`} to={item.url}>
                  <div>
                    <img src={item.icon} alt='sidebar-img'/>
                    {item.name === 'NOTIFICATIONS' && <div className="notification-dot"></div>}
                  </div>
                </NavLink>    
              </div>          
            )
          })}
        </div>
        <div className="logout" onClick={logout}>
          <img src={LogoutIcon} alt="logout"/>
        </div>
      </div>
    )
  }
  
  export default SideBar;
  