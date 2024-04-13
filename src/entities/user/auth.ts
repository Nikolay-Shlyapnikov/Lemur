import {fetch} from "../../shared/lib/request/API";

export const auth = (email: string, password: string, callBackOk:(data: Record<string, any>) => void, callBackError:(error: Record<string, any>) => void) => {
    fetch('get', `address`,
        {params: {email, password}},
        (data)=> {
            callBackOk(data);
        },
        (error)=>{
            callBackError(error);
        })
}