export const objectToGetRequest = (params: Record<string, any>):string => {
    let result = '?';
    const keyArr = Object.keys(params)
    keyArr.forEach((key,index) => {
        result+= `${key}=${params[key]}`
        if(index != key.length)
            result += '&'
    })
    return result;
}