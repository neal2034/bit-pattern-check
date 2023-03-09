export const THREE_DIG = /^\d{3}$/


const chineseNum = "零一二三四五六七八九"
const CHINESE_NUM = "^[chineseNum]{3}$".replace("chineseNum",chineseNum)
export const CHINESE_NUM_REGE = new RegExp(CHINESE_NUM)
const japaneseNum = "零壱弐参肆伍陸漆捌玖"
const japanNumRegex =  "^[japaneseNum]{3}$".replace("japaneseNum",japaneseNum)
export const JAPAN_NUM_REGEX = new RegExp(japanNumRegex)

const AAA = /^(\d)\1{2}$/
const ABC = /^(\d)(?!\1)(\d)(?!\1|\2)(\d)$/


export interface SimpleKeyValueObject {
    [key: string]: any
}


export const REGEX_3D:SimpleKeyValueObject = {
    "999" : THREE_DIG,
    "AAA" : AAA,
    "ABC" : ABC,
    "999JP" : JAPAN_NUM_REGEX,
    "999CN" : CHINESE_NUM_REGE
}

export const REGEX_4D:SimpleKeyValueObject = {}
export const REGEX_5D:SimpleKeyValueObject = {}
export const REGEX_6D:SimpleKeyValueObject = {}
export const REGEX_6D_PLUS:SimpleKeyValueObject = {}
export const REGEX_OX_DIGITS:SimpleKeyValueObject = {}