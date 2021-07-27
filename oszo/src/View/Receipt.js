import { Rows, Line, Logo } from 'UIKit';


const Reciept = () => {
    return (
        <div className="View Receipt">
            <Rows>
                <Line>
                    <Logo />
                </Line>
                <Line justify="between" alignborders>
                    <Rows>
                        <h1>Client Name</h1>
                        <h3>Invoice Data: <b>May 24th, 2024</b></h3>
                    </Rows>
                    <Rows>
                        <h1>NCR</h1>
                        <h3>123 Main Street</h3>
                    </Rows>
                </Line>
            </Rows>
        </div>
    )
}

export default Reciept;