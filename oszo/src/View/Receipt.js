import {useEffect } from 'react';

import { Icon,Rows, Line, Logo, Center, Box, Btn } from 'UIKit';
import "./Receipt.css";

import { useDispatch } from 'react-redux';
import { useRedux } from 'Hooks/useRedux';
import { getReceipt, bindReceipt } from 'State/receipt';

import { useParams, Link } from 'react-router-dom';
import useAuth from 'Hooks/useAuth';

const Reciept = () => {
    const user = useAuth();
    const dispatch = useDispatch();
    const params = useParams();
    const receipt = useRedux('receipt', getReceipt, { ...params } );

    console.log(user);

    useEffect(() => {
        if(user.authed) {
            dispatch(bindReceipt(params.id));
        }
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

    const renderSignIn = () => {
        if(!user.authed) {
            return (
                <Center>
                    <Box>
                        <Rows>
                            <h1>Register to save your receipt</h1>
                            <Line justify="center">
                                <Link to={`/register?receipt=${params.id}`}>
                                    <Btn>Register</Btn>
                                </Link>
                                <Link to={`/login?receipt=${params.id}`}>
                                    <Btn>Login</Btn>
                                </Link>
                            </Line>
                        </Rows>
                    </Box>
                </Center>
            )
        }
    }
    
    return receipt.render(() => {
        return (
            <div className="View Receipt">
                <Rows extra>
                    {renderSignIn()}

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