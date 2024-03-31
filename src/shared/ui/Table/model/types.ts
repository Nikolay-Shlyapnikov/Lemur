import {mainProps} from "../../../lib/store/types/props";
import {ReactNode} from "react";
export interface tablePropsInterface  extends mainProps {
    dataSource?: string
    emptyMessage?: ReactNode
    records?:Array<Record<string, any>>
    rowClick?(record:Record<string, any>, rowNum:number, colNum:number): void
    cellClick?(record:Record<string, any>, rowNum:number, colNum:number): void
}
