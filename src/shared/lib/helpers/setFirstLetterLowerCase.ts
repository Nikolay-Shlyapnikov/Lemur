export function lowerCaseFirstLetter(inputString: string): string {
    if (inputString.length === 0) {
        return inputString;
    }
    const firstLetter = inputString[0];
    const restOfString = inputString.slice(1);
    const lowerCasedFirstLetter = firstLetter.toLowerCase();
    return lowerCasedFirstLetter + restOfString;
}