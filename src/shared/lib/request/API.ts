import axios, {AxiosResponse} from "axios";

const responseHandler = (
        response: AxiosResponse<any, any>,
        callBackOk?: (response: Record<string, any>) => void,
        callBackError?: (error: Record<string, any>) => void
    ) => {
    if (response?.data?.success == false && callBackError) {
        callBackError(response.data);
    }
    else if (callBackOk) {
        callBackOk(response.data);
    }
}

const errorHandler = (error: Record<string, any>, callBackError?: (error: Record<string, any>) => void) => {
    if(callBackError && error && error.data)
        callBackError(error.data);
}

export const fetch = (
    method: string,
    url: string,
    config?: {params?: Record<string, any>, headers?: Record<string, any>},
    callBackOk?: (response: Record<string, any>) => void,
    callBackError?: (error: Record<string, any>) => void
) => {
    switch (method) {
        case 'post':
            axios.post(url, config?.params, config?.headers)
                .then(response => {
                    responseHandler(response, callBackOk, callBackError);
                })
                .catch(error => {
                    errorHandler(error, callBackError);
                });
            break;
        case 'get':
            axios.get(url, config)
                .then(response => {
                    responseHandler(response, callBackOk, callBackError);
                })
                .catch(error => {
                    errorHandler(error, callBackError);
                });
            break;
        case 'update':
            axios.put(url, config?.params, config?.headers)
                .then(response => {
                    responseHandler(response, callBackOk, callBackError);
                })
                .catch(error => {
                    errorHandler(error, callBackError);
                });
            break;
        case 'delete':
            axios.delete(url, config?.headers)
                .then(response => {
                    responseHandler(response, callBackOk, callBackError);
                })
                .catch(error => {
                    errorHandler(error, callBackError);
                });
            break;
    }
}