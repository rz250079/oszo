import './Rows.css';

const Rows = (props) => {
    return (
        <div className="Rows" justify={props.justify} extra={props.extra ? 'true' : ''}>
            {props.children}
        </div>
    )
}

export default Rows;