
import { Line, Rows, Inner } from 'UIKit';

import backSrc from 'Images/back.png'

const Home = () => {
    return (
        <Inner>
            <Rows extra>
                <img className="full" src={backSrc} alt="qccode" />
                <h1>QR Code to Receipt</h1>
                <Rows>
                    <h3>
                        The idea is to replace the hard print receipt with QR code scan. 
                        The customer will scan the QR Code that will be display on the POS 
                        without the need to fill his personal details on "Point Of Sale". 
                    </h3>
                    <h3>
                        This will help the customer keep track of his shopping 
                        and will help the world with less wasted paper.
                    </h3>
                </Rows>
            </Rows>
        </Inner>
    )
    
}

export default Home;