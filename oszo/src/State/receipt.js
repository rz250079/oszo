
import { GET } from "./API";

const END_POINT = "receipt/"


export const getReceipt = GET('GET_RECEIPT', END_POINT + 'GetReceiptByTrxId', { transactionId: 1 });


export const receiptReducer = (receipt = null, action) => {
    if (action.type === 'GET_RECEIPT') {
        return action.payload;
    }

    return receipt;
}
