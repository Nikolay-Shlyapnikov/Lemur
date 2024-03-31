import React, {useEffect, useState} from "react";
import {idGeneration} from "../../../lib/store/utils/idGeneration"
import {getInnerProps} from "../../../lib/store/utils/assignProps";
import {getResultProps} from "../../../lib/store/utils/getProps";
import {defaultHint} from "../model/const";
import {hintInterface} from "../model/types";
import {getClassName} from "../../../lib/helpers/getClassName"
import {store} from "../../../lib/store/store"
import {createElem} from "../../../lib/store/uiSlice";

export const Hint = (props:hintInterface) => {

    const [id] = useState(idGeneration(defaultHint.id!));

    let layoutProps = getInnerProps(defaultHint, props)

    const resultProps = getResultProps('ui', props.id, layoutProps, id);

    useEffect(() => {
        store.dispatch(createElem(resultProps))
    })

    return(
        <div
            data-id={resultProps.id}
            key={resultProps.id}
            data-slice={resultProps.sliceName}
            style={{...resultProps.className?.hintWrapper!.style, ...resultProps.styles}}
            className={
                (resultProps.hintIcon ? '' : getClassName(resultProps.className?.hintIcon?.useDefault!, defaultHint.className?.hintIcon?.name!, resultProps.className?.hintIcon?.name!, resultProps.visible)) + " " +
                (resultProps.status == 'warning' ? getClassName(resultProps.className?.warningIcon?.useDefault!, defaultHint.className?.warningIcon?.name!, resultProps.className?.warningIcon?.name!, resultProps.visible) : '') + " " +
                (resultProps.status == 'info' ? getClassName(resultProps.className?.infoIcon?.useDefault!, defaultHint.className?.infoIcon?.name!, resultProps.className?.infoIcon?.name!, resultProps.visible) : '') + " " +
                (resultProps.status == 'error' ? getClassName(resultProps.className?.errorIcon?.useDefault!, defaultHint.className?.errorIcon?.name!, resultProps.className?.errorIcon?.name!, resultProps.visible) : '') + " " +
                (resultProps.status == 'ok' ? getClassName(resultProps.className?.okIcon?.useDefault!, defaultHint.className?.okIcon?.name!, resultProps.className?.okIcon?.name!, resultProps.visible) : '')
            }
        >
            {resultProps.hintIcon}
            <div
                className={getClassName(resultProps.className?.hintInner?.useDefault!, defaultHint.className?.hintInner?.name!, resultProps.className?.hintInner?.name!, resultProps.visible)}
                style={resultProps.className?.hintInner?.style}
            >
                {resultProps.hintInner}
            </div>
        </div>
    )
}