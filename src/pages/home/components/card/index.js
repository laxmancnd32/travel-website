import { useState } from 'react';
import HeartIcon from '../../../../assets/images/heart.svg';
import HeartActiveIcon from '../../../../assets/images/heart-active.svg';
import CommentIcon from '../../../../assets/images/comment.svg';
import CommentActiveIcon from '../../../../assets/images/comment-active.svg';

import './style.scss';

const Card = (props) => {
    const [isCardLiked, setIsCardLiked] = useState(false);
    const [isCommented, setIsCommented] = useState(false);

    const toggleIsLiked = () => {
        setIsCardLiked((isCardLiked) => !isCardLiked);
    };

    const toggleIsCommented = () => {
        setIsCommented((isCommented) => !isCommented);
    }

    const { cardInfo = {} } = props;
    const { name = '', description = '', places = [], image = ''} = cardInfo;
    return (
      <div className="card">
          <img className="image" src={image} alt="imgg-card" />
          <div className="tags">
              {places.map((place) => (<span>{place}</span>))}
          </div>
          <div className="name">{name}</div>
          <div className="description">{description}</div>
          <div className="feedback">
              <img className={'comment'} src={isCommented ? CommentActiveIcon: CommentIcon} alt="comment" onClick={toggleIsCommented}/>
              <img className={'like'} src={isCardLiked ? HeartActiveIcon : HeartIcon} alt="like" onClick={toggleIsLiked}/>
          </div>
      </div>
    )
  }
  
  export default Card;
  