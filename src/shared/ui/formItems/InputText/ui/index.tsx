import React, {useEffect, ChangeEvent, useState, CSSProperties} from "react";
import { inputTextPropsInterface } from "../model/types";
import {createElem, setProps} from '../../../../lib/store/uiSlice'
import {store} from "../../../../lib/store/store"
import {defaultInputText} from "../model/const"
import {getInnerProps} from "../../../../lib/store/utils/assignProps";
import {getClassName} from "../../../../lib/helpers/getClassName";
import {getResultProps} from "../../../../lib/store/utils/getProps";
import {idGeneration} from "../../../../lib/store/utils/idGeneration";
import {validate} from "../model/api/InputTextUtils";
import {checkInnerHint, getHintElement} from "../../hint";

import {messageTextürder, optsorder} from "../model/const"

const popka = messageTextürder;
const popka2 = optsorder;

export const InputText:React.FC<inputTextPropsInterface>= (props) => {

    const [id] = useState(idGeneration(defaultInputText.id!));

    let inputProps = getInnerProps(defaultInputText, props)

    useEffect(() => {
        store.dispatch(createElem(inputProps));
        if(resultProps.value == '' || resultProps.value == undefined)
            store.dispatch(setProps({id: resultProps.id!, key: 'isFocused', value: false}));
        else {
            store.dispatch(setProps({id: resultProps.id!, key: 'isFocused', value: true}));
        }
    }, []);

    const resultProps = getResultProps('ui', props.id, inputProps, id);

    useEffect(() => {
        if(resultProps.value == '' || resultProps.value == undefined)
            store.dispatch(setProps({id: resultProps.id!, key: 'isFocused', value: false}));
        else {
            store.dispatch(setProps({id: resultProps.id!, key: 'isFocused', value: true}));
        }
    }, [resultProps.value]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(resultProps.onChange)
            resultProps.onChange(e.target.value, String(resultProps.value) || "", resultProps.name);
        store.dispatch(setProps({ id: resultProps.id!, key: 'value', value: e.target.value }));
        if(resultProps.autoValidate)
            validate(resultProps.id!);
    }

    const keyDownHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
        resultProps.keyPress && resultProps.keyPress(e.currentTarget.value, String(resultProps.value) || "", e.key)
        store.dispatch(setProps({ id: resultProps.id!, key: 'value', value: e.currentTarget.value }));
    }

    const onExitHandler = (e:React.FocusEvent<HTMLInputElement, Element>) => {
        if(resultProps.onExit)
            resultProps.onExit(e.target.value, String(resultProps.value) || "")

        store.dispatch(setProps({ id: resultProps.id!, key: 'value', value: e.target.value }));

        if(resultProps.value == '' || resultProps.value == undefined)
            store.dispatch(setProps({id: resultProps.id!, key: 'isFocused', value: false}));
        else {
            store.dispatch(setProps({id: resultProps.id!, key: 'isFocused', value: true}));
        }
    }
    const onFocusHandler = (e:React.FocusEvent<HTMLInputElement, Element>) => {
        if (resultProps.canEdit)
            store.dispatch(setProps({id: resultProps.id!, key: 'isFocused', value: true}));
    }

    const alignOptions: Record<string, CSSProperties> = {
        top: { display: 'flex', flexDirection: 'column' },
        bottom: { display: 'flex', flexDirection: 'column-reverse' },
        left: { display: 'flex', flexDirection: 'row' },
        right: { display: 'flex', flexDirection: 'row-reverse' }
    };

    const titleAlign: CSSProperties = resultProps.titleAlign ? alignOptions[resultProps.titleAlign] : {display: 'flex', width: '100%'};

    useEffect(()=> {
        checkInnerHint(resultProps);
    }, [resultProps.invalidValidatorsIndexes]);

    return (
        <div
            className={getClassName(resultProps.classNames?.hintWrapper?.useDefault!, defaultInputText.classNames?.hintWrapper?.name!, resultProps.classNames?.hintWrapper?.name!, resultProps.visible)}
            style={resultProps.classNames?.hintWrapper?.style}
        >
            { resultProps.invalidValidatorsIndexes && resultProps.invalidValidatorsIndexes.length !== 0 ? getHintElement(resultProps) : '' }
            <div
                className={
                    getClassName(resultProps.classNames?.inputWrapper?.useDefault!, defaultInputText.classNames?.inputWrapper?.name!, resultProps.classNames?.inputWrapper?.name!, resultProps.visible) + ' ' +
                    (resultProps.value ? '' : getClassName(resultProps.classNames?.empty?.useDefault!, defaultInputText.classNames?.empty?.name!, resultProps.classNames?.empty?.name!, resultProps.visible))
                }
                style={{...titleAlign,...resultProps.classNames?.inputWrapper?.style}}
            >
                <label
                    className={
                        getClassName(resultProps.classNames?.title?.useDefault!, defaultInputText.classNames?.title?.name!, resultProps.classNames?.title?.name!, resultProps.visible) + ' ' +
                        (resultProps.isFocused ? getClassName(resultProps.classNames?.titleActive?.useDefault!, defaultInputText.classNames?.titleActive?.name!, resultProps.classNames?.titleActive?.name!, resultProps.visible) : '')
                    }
                    htmlFor={resultProps.id}
                    style={resultProps.classNames?.title?.style}
                >
                    {resultProps.title}
                </label>
                <input
                    type={resultProps.isPassword ? 'password' : 'text'}
                    data-id={resultProps.id}
                    id={resultProps.id}
                    key={resultProps.id}
                    className={ getClassName(resultProps.classNames?.input?.useDefault!, defaultInputText.classNames?.input?.name!, resultProps.classNames?.input?.name!, resultProps.visible) }
                    name={resultProps.name}
                    placeholder={resultProps.title ? "" : resultProps.placeholder}
                    value={String(resultProps.value)}
                    onKeyDown={(e) => keyDownHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    onBlur={(e) => onExitHandler(e)}
                    onFocus={(e) => { onFocusHandler(e)}}
                    data-slice={resultProps.sliceName}
                    style={resultProps.classNames?.input?.style}
                    readOnly={!resultProps.canEdit}
                />
            </div>
        </div>
    )
}