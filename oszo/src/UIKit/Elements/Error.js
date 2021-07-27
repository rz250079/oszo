import { Line, Rows } from 'UIKit';
import './Error.css';


const Error = (props) => {
    return (
        <div className="Error">
            <Rows>
                <Line>
                    <b>Error: </b>
                    {props.message}
                </Line>
                {props.response  ? 
                (
                    <div>
                        {props.response} 
                    </div>
                ) : 
                null
                }
                
            </Rows>
        </div>
    )
}

export default Error;