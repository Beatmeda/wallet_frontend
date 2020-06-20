import {getSubmitInfo, responseAPI, catchFormError} from "../utils";
import walletServices from "../../services/walletServices";

const onSubmit = (values) => {
    const formValues = getSubmitInfo(values);
    console.log('Hooli');
    return walletServices.RegisterUser(formValues).then(({data}) => {
        console.log(data);
       responseAPI(data);
    }).catch(catchFormError);

};
export {onSubmit};