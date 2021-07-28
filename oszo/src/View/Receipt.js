import {useEffect } from 'react';

import { Icon,Rows, Line, Logo } from 'UIKit';
import "./Receipt.css";

import { useDispatch } from 'react-redux';
import { useRedux } from 'Hooks/useRedux';
import { getReceipt, bindReceipt } from 'State/receipt';

import { useParams } from 'react-router-dom';


const Reciept = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const receipt = useRedux('receipt', getReceipt, { ...params } );

    useEffect(() => {
        console.log(params);
        
        dispatch(bindReceipt(params.id));
    }, []);

    const renderList = () => {
        return receipt.data.items.map((i, index) => {
            return (
                <tr key={i.itemCode}>
                    <td>{i.quantity}</td>
                    <td>{i.description}</td>
                    <td>{`${i.cost}$`}</td>
                    <td><strong>{`${i.cost}$`}</strong></td>
                </tr>
            )
        })
    }
    
    return receipt.render(() => {
        return (
            <div className="View Receipt">
                <Rows extra>
                    <Line>
                        <Logo />
                    </Line>
                    <Line justify="between" alignborders>
                        <Rows>
                            <h1>Client Name</h1>
                            <h3>Invoice Data: <b>May 24th, 2024</b></h3>
                            <h4>{process.env.QR_URL}</h4>
                        </Rows>
                        <Rows>
                            <h1>NCR</h1>
                            <h3>123 Main Street</h3>
                        </Rows>
                    </Line>
                    <Line>
                        <table>
                            <thead>
                                <tr>
                                    <th>QTY</th>
                                    <th>DESCRIPTION</th>
                                    <th>PRICE</th>
                                    <th>SUBTOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderList()}
                            </tbody>
                        </table>
                    </Line>
                    <Line>
                        <table className="secondTable">
                            <thead>
                                <tr>
                                    <th>PAYMENT INFO</th>
                                    <th>DUE BY</th>
                                    <th>TOTAL DUE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Rows>
                                            <h4>Account No:<b>10000987</b></h4>
                                            <h4>Routing No: <b>10000987</b></h4>
                                        </Rows>
                                    </td>
                                    <td>
                                        <h1><b>May 30,2024</b></h1>
                                    </td>
                                    <td>
                                        <h1 className="red"><strong>{`${receipt.data.balanceDue}$`}</strong></h1>
                                    </td>
                                </tr>
                                
                           </tbody>
                        </table>
                    </Line>
                    <hr></hr>
                    <Line>
                            <Icon i="heart" />  <h3><strong>Thank you!</strong></h3>
                        </Line>
               </Rows>
            </div>
        )
    })
}

export default Reciept;