import './Line.css';

const Line = (props) => {
    return (
        <div className="Line" justify={props.justify} alignborders={props.alignborders ? 'true' : ''}>
            {props.children}
        </div>
    )
}

export default Line;