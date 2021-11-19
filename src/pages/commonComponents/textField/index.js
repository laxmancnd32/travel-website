import './style.scss';

const TextField = (props) => {
  const {
    className = '', label = '', placeholder = '',
    value = '', onChange = () => {}, icon = '',
    fieldType = '', type='text', errorMsg = ''
  } = props;

  return (
    <div className={"text-field" + (className ? ` ${className}` : '')}>
        {!!icon && <img src={icon} className="icon" alt="img"/>}
        <input
          className="input"
          placeholder={placeholder}
          label={label}
          value={value}
          type={type}
          onChange={(e) => onChange(fieldType, e.target.value)}
        />
        {!!errorMsg && <span className="error">{errorMsg}</span>}
    </div>
  )
  }
  
  export default TextField;
  