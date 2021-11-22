import './style.scss';

const Checkbox = (props) => {
    const { className = '', checked = false, name = 'checkbox', onChange = () => {}, index=''} = props;

    return (
        <div className={"checkbox-container" + (className ? ` ${className}` : '')} key={`${index}-${name}`}>
            <input
                type="checkbox"
                checked={checked}
                name={name}
                onChange={onChange}
            id="checkbox" />
            <label for="checkbox"></label>
        </div>
    )
}

export default Checkbox;
