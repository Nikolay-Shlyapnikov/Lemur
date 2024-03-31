import axios from "axios";

export const fetch = (
    method: string,
    url: string,
    config?: {params?: Record<string, any>, headers?: Record<string, any>},
    callBackOk?: (response: Record<string, any>) => void,
    callBackError?: (error: Record<string, any>) => void,
) => {
    switch (method) {
        case 'post':
            axios.post(url, config?.params, config?.headers)
                .then(response => {
                    if (response?.data?.success) {
                        if(callBackOk)
                            callBackOk(response.data);
                    }
                     else {
                        if(callBackError)
                            callBackError(response.data);
                    }
                })
                .catch(error => {
                    if(callBackError)
                        callBackError(error.data);
                })
            break;
        case 'get':
            axios.get(url, config)
                .then(response => {
                    if (response?.data?.success) {
                        if(callBackOk)
                            callBackOk(response.data);
                    }
                    else {
                        if(callBackError)
                            callBackError(response.data);
                    }
                })
                .catch(error => {
                    if(callBackError)
                        callBackError(error.data);
                })
            break;
        case 'update':
            axios.put(url, config?.params, config?.headers)
                .then(response => {
                    if (response?.data?.success) {
                        if(callBackOk)
                            callBackOk(response.data);
                    }
                    else {
                        if(callBackError)
                            callBackError(response.data);
                    }
                })
                .catch(error => {
                    if(callBackError)
                        callBackError(error.data);
                })
            break;
        case 'delete':
            axios.delete(url, config?.headers)
                .then(response => {
                    if (response?.data?.success) {
                        if(callBackOk)
                            callBackOk(response.data);
                    }
                    else {
                        if(callBackError)
                            callBackError(response.data);
                    }
                })
                .catch(error => {
                    if(callBackError)
                        callBackError(error.data);
                })
            break;
    }
}