import './Btn.css';

const Btn = (props) => {
    return (
        <div className="Btn" onClick={props.onClick}>
            <button>{props.children}</button>
        </div>
    )
}

export default Btn;