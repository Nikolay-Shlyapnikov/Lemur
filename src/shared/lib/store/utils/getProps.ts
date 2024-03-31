import {RootState} from "../types/props";
import {useSelector} from "react-redux";

export const getResultProps = <T extends Record<string, any>>(
    slice: keyof RootState,
    id: string | undefined,
    defaultProps: T | {id:string},
    generatedId:string
) => {
    return useSelector((state: Record<string, any>) => {
        let resultId = ''
        id == undefined ? resultId = generatedId : resultId = id
        const elemProps = state[slice][resultId]
        if (elemProps !== undefined) {
            return elemProps as T;
        } else {
            defaultProps.id = resultId
            return defaultProps as T;
        }
    })
}