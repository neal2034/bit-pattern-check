/**
 *  this file is used to  detect different pattern
 */
import {SimpleKeyValueObject, THREE_DIG} from "../constant/regex";
import {REGEX_3D, REGEX_4D, REGEX_5D, REGEX_6D, REGEX_6D_PLUS, REGEX_OX_DIGITS} from "../constant/regex";

export type STRATEGY = "3D" | "4D" | "5D" | "6D" | "6D_PLUS" | "OX_DIGITS"

/**
 * get the detect function with regex map, the function could be used to retrieve
 * detail pattern of some string
 * @param regexMap
 */
function detectPatternWithRegex(regexMap: SimpleKeyValueObject){
    return function (detectStr:string){
        const result = new Set<string>();
        for (let item in regexMap){
            if (regexMap[item].test(detectStr)) {
                result.add(item)
            }
        }
        return result
    }
}

export const strategies = {
    "3D" : detectPatternWithRegex(REGEX_3D),
    "4D" : detectPatternWithRegex(REGEX_4D),
    "5D" : detectPatternWithRegex(REGEX_5D),
    "6D" : detectPatternWithRegex(REGEX_6D),
    "6D_PLUS" : detectPatternWithRegex(REGEX_6D_PLUS),
    "OX_DIGITS" : detectPatternWithRegex(REGEX_OX_DIGITS),
}


/**
 * get strategy key via string
 * @param str
 */
export const getStrategyKey = function (str: string): Set<STRATEGY> {
    const result = new Set<STRATEGY>()
    if (THREE_DIG.test(str) || str.length === 3) {
        result.add("3D")
    }
    return result
}


