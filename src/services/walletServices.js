import {
    post,
    urlRegisterUser,
    urlPurchase,
    urlLoadWallet,
    urlGetBalance
} from '../apis';

export default {
    RegisterUser: data => post(urlRegisterUser, data),
    Purchase: data => post(urlPurchase, data),
    LoadWallet: data => post(urlLoadWallet, data),
    GetBalance: data => post(urlGetBalance, data)
};