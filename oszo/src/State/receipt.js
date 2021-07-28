
import { GET, POST } from "./API";

const END_POINT = "receipts/"


export const getReceipt = GET('GET_RECEIPT', END_POINT + '', { transactionId: 1 });
export const postReceipt = POST('POST_RECEIPT', END_POINT + '', { transactionId: 1 });


export const receiptReducer = (receipt = null, action) => {
    if (action.type === 'GET_RECEIPT') {
        return action.payload;
    }

    return receipt;
}
