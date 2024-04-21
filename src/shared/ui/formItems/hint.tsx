import {store} from "../../lib/store/store";
import React, {ReactNode} from 'react';
import {Hint} from "../Hint";
import {formItemsInterfaces} from "./types";
import {setProps} from "../../lib/store/slices/uiSlice";

export const checkInnerHint = (props: formItemsInterfaces) => {
    if(props.invalidValidatorsIndexes && props.invalidValidatorsIndexes.length > 0)
        store.dispatch(setProps(
            {
                id: 'hint_' + props.id,
                key: 'hintInner', value:
                    props.invalidValidatorsIndexes.map((validateIndex, index) => {
                            return (
                                <div key={'hint_' + props.id+ index} style={{flex: '100%'}}>
                                    {(index+1)}. {props.validators![validateIndex].errorMessage}
                                </div>
                            )
                        }
                    )
            }
        ))
}

export const getHintElement = (props: formItemsInterfaces): ReactNode => {
    return (
        <Hint
            id={'hint_' + props.id}
            key={'hint_' + props.id}
            status={'error'}
            className={{hintInner: {style: {flexWrap: 'wrap', width: 250}}}}
        />
    )
}