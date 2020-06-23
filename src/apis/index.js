import axios from 'axios';

const urlBase ='https://wallet-backend.herokuapp.com/apis'
const post = async (urlRequest, dataRequest) => {
    const response = await axios({
        url: urlRequest,
        method: 'POST',
        contentType: 'application/json',
        data: dataRequest
    });
    return response;
};

const urlRegisterUser = `${urlBase}/register`;
const urlPurchase = `${urlBase}/transactions/purchase`;
const urlLoadWallet = `${urlBase}/transactions/chargeMoney`;
const urlGetBalance = `${urlBase}/transactions/get_balance`;

export {post, urlRegisterUser, urlPurchase, urlLoadWallet, urlGetBalance};
