import './style.scss';

const MainContainer = (props) => {
  return (
    <div className="main-container">{props.children}</div>
  )
}

export default MainContainer;
