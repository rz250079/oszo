
import { GET, POST } from "./API";


export const getReceipt = ({ id }) =>  GET('GET_RECEIPT', 'GetReceipt/', { trxId: id });
export const bindReceipt = id => POST('BIND_RECEIPT', 'BindCustomerToReceipt/', { CustomerToken: localStorage.getItem(process.env.REACT_APP_TOKEN_KEY), TrxId: id});


export const receiptReducer = (receipt = null, action) => {
    if (action.type === 'GET_RECEIPT') {
        return action.payload;
    }

    return receipt;
}
