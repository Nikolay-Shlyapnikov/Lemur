
import {PayloadAction} from "@reduxjs/toolkit";
export const setPropsByKey = <T extends { [key: string]: any }>(
    state: Record<string, T>,
    action: PayloadAction<{ id: string; key: string; value: any }>
) => {
    const { key, value, id } = action.payload;
    (state[id] as { [key: string]: any })[key as string] = value;
};

export const setPropsByKeys = <T extends { [key: string]: any }>(
    state: Record<string, T>,
    action: PayloadAction<{ id: string; propsArray: Array<{key: string, value: any}> }>
) => {
    const { id, propsArray } = action.payload;
    const elem = state[id] as { [key: string]: any }
    propsArray.forEach(_ => elem[_.key] = _.value)
}