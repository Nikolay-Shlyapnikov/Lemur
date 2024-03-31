
import {isObject} from "../../helpers/isObject";

export function getAssignProps <T extends {}>(propsMass:T[]){
    return propsMass.reduce((combinedProps, props) => {
        return {...combinedProps, ...props};
    }, {} as T)
}

/**
 *
 * @param internal {Record<string, any>} - указывать внутренний тип данных
 * @param external {Record<string, any>} - указывать внешний тип данных
 * @example
 *
 * let assignedProps = GetInnerProps(defaultDataSource, props ) - сам определит тип данных либо можно указать через <>
 */
export function getInnerProps <T extends Record<string,any>, Y extends Record<string,any>>(internal:T, external:Y) {
    const newExternal = {...external}
    for (const externalKey in external) {
        if(isObject(external[externalKey])) {
            if (externalKey in internal) {
                newExternal[externalKey] = getInnerProps(internal[externalKey], external[externalKey])
            }
        }
    }
    return  {...internal, ...newExternal}
}