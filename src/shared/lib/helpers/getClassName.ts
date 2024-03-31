import styles from '../../../app/styles/styles.scss'
export const getClassName = (
    useDefaultClass: boolean,
    defaultStyle: string,
    propsStyle: string,
    visibility: boolean = true
): string => {
    let resultClassName = '';
    if (useDefaultClass)
        if (propsStyle === defaultStyle)
           resultClassName = defaultStyle;
        else
           resultClassName = `${defaultStyle} ${propsStyle}`;
    else
        if (propsStyle !== undefined)
           resultClassName = propsStyle
    if(!visibility)
        resultClassName = resultClassName + " " +styles.hide
    return resultClassName
}