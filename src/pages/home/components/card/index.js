import { useEffect, useState, useRef } from 'react';
import HeartIcon from '../../../../assets/images/heart.svg';
import HeartActiveIcon from '../../../../assets/images/heart-active.svg';
import CommentIcon from '../../../../assets/images/comment.svg';
import CommentActiveIcon from '../../../../assets/images/comment-active.svg';

import Checkbox from '../checkboxes/circular-checkbox';
import './style.scss';

const Card = (props) => {
    const [isCardLiked, setIsCardLiked] = useState(false);
    const [isCommented, setIsCommented] = useState(false);
    const [isCardSelected, setIsCardSelected] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        if(cardRef.current) {
            const selectedCard = cardRef.current;
            const cardTitle = selectedCard.getElementsByClassName("name")[0];
            if(isCardSelected) {
                selectedCard.style.backgroundImage = `linear-gradient(135deg, #2B2ECF 0%, #652BCF 100%)`;
                cardTitle.style.color = '#fff';
            } else {
                selectedCard.style.backgroundImage = 'none';
                cardTitle.style.color = '#2B2ECF';
            }
        }
    }, [isCardSelected])

    const toggleIsLiked = (e) => {
        e.stopPropagation();
        setIsCardLiked((isCardLiked) => !isCardLiked);
    };

    const toggleIsCommented = (e) => {
        e.stopPropagation();
        setIsCommented((isCommented) => !isCommented);
    }

    const toggleCheckbox = (e) => {
        setIsCardSelected((isCardSelected) => !isCardSelected);
    }

    const { cardInfo = {}, index = '' } = props;
    const { name = '', description = '', places = [], image = '' } = cardInfo;
    
    return (
        <div className={"card"} ref={cardRef} key={`${index}-${name}`} onClick={toggleCheckbox}>
            <img className="image" src={image} alt="imgg-card" />
            <Checkbox
                index={index}
                className="card-checkbox"
                onChange={toggleCheckbox}
                checked={isCardSelected}
                name="card-checkbox"
            />
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
  