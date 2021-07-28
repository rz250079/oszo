import { Line, Icon } from 'UIKit';
import './Input.css';

const Input = (props) => {
    return (
        <div className="Input">
            <Line justify="between">
                <input 
                    value={props.value} 
                    onChange={props.onChange} 
                    type={props.type || 'text'} 
                    placeholder={props.placeholder}
                    />
                {props.i ? <Icon i={props.i} />: null}
            </Line>
        </div>
    )
}

export default Input;