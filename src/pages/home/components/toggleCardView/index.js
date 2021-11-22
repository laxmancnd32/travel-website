import GridViewIcon from '../../../../assets/images/grid-view-icon.svg';
import ListViewIcon from '../../../../assets/images/list-view-icon.svg'

import './style.scss';

const ToggleCardView = (props) => {
    const { toggleCardView, cardView = 'grid' } = props;
   
    return (
        <div className="toggle-card-view">
            <div className={cardView === 'grid' ? 'active-view' : ''} onClick={(e) => toggleCardView('grid')}>
                <img src={GridViewIcon} alt="grid" />
            </div>
            <div className={cardView === 'list' ? 'active-view' : ''} onClick={(e) => toggleCardView('list')}>
                <img src={ListViewIcon} alt="list" />
            </div>
        </div>
    )
}

export default ToggleCardView;
