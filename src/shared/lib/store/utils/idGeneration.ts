import { v4 as uuidv4 } from 'uuid';
export const idGeneration = (defaultId:string):string => {
    return defaultId + "_" + uuidv4()
}