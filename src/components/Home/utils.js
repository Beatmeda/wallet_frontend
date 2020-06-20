import {catchFormError, responseAPI} from "../utils";
import walletServices from "../../services/walletServices";

const loadWallet = (values) => {
    const body = {
        document: values[0],
        phone: values[1],
        value: values[2],
        type: 'recharge'
    }
    return walletServices.LoadWallet(body).then(({data}) => {
        responseAPI(data);
    }).catch(catchFormError);
};

const purchase = (values) => {
    const body = {
        document: values[0],
        phone: values[1],
        value: values[2],
        type: "purchase"
    }
    return walletServices.Purchase(body).then(({data}) => {
        responseAPI(data);
    }).catch(catchFormError);
};

const getBalance = (values) => {
    const body = {
        document: values[0],
        phone: values[1],
        type: "balance"
    }
    return walletServices.GetBalance(body).then(({data}) => {
        responseAPI(data);
    }).catch(catchFormError);
};

export {loadWallet, purchase, getBalance};