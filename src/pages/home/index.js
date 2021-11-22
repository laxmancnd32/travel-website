import Card from './components/card';
import SideBar from './components/sidebar';
import './style.scss';
import { DESTINATIONS } from '../constants.js';

const Home = (props) => {
    return (
      <div className="home-container">
          <SideBar />
          <div className="content">
            <div className="header">
              <div className="title">Discover great places to visit</div>
            </div>
            <div className="card-wrapper">
              {DESTINATIONS.map((cardInfo, index) => {
                return <Card cardInfo={cardInfo} index={index} />
              })}
            </div>
          </div>
      </div>
    )
  }
  
  export default Home;
  