import { useState } from 'react';
import Card from './components/card';
import SideBar from './components/sidebar';
import ToggleCardView from './components/toggleCardView';
import { DESTINATIONS } from '../constants.js';

import StLogo from '../../assets/images/st-logo.svg';

import './style.scss';

const Home = (props) => {
  const [cardView, setCardView] = useState('grid')

  const toggleCardView = (view) => {
    setCardView(view);
  }

    return (
      <div className="home-container">
          <SideBar />
          <div className="content">
            <div className="header">
              <img className="logo" src={StLogo} alt="logo" />
              <div className="title">{"Discover \ngreat places \nto visit"}</div>
              <ToggleCardView cardView={cardView} toggleCardView={toggleCardView}/>
            </div>
            <div className={"card-wrapper" + (cardView === 'list' ? ' list-view' : '')}>
              {DESTINATIONS.map((cardInfo, index) => {
                return <Card cardInfo={cardInfo} index={index} cardView={cardView} />
              })}
            </div>
          </div>
      </div>
    )
  }
  
  export default Home;
  