import './Rows.css';

const Rows = (props) => {
    return (
        <div className="Rows" justify={props.justify}>
            {props.children}
        </div>
    )
}

export default Rows;