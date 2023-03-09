const chineseNum = "零一二三四五六七八九"
const japaneseNum = "零壱弐参肆伍陸漆捌玖"
const arabicNum = "٠٢٥٧٩٨٦٤٣١"
//flag unicode array
const flagUnicodeArray = [ '\\u{1f1fa}\\u{1f1f8}',
    '\\u{1f1e8}\\u{1f1f3}',
    '\\u{1f1fa}\\u{1f1f3}',
    '\\u{1f1e6}\\u{1f1ea}',
    '\\u{1f1e8}\\u{1f1e6}',
    '\\u{1f1f0}\\u{1f1f7}',
    '\\u{1f1eb}\\u{1f1f7}',
    '\\u{1f1ef}\\u{1f1f5}',
    '\\u{1f1e7}\\u{1f1f7}',
    '\\u{1f1e9}\\u{1f1ea}',
    '\\u{1f1ea}\\u{1f1f8}',
    '\\u{1f1f7}\\u{1f1fa}',
    '\\u{1f1ec}\\u{1f1e7}',
    '\\u{1f1ea}\\u{1f1fa}',
    '\\u{1f1fb}\\u{1f1f3}',
    '\\u{1f1fa}\\u{1f1e6}',
    '\\u{1f1e6}\\u{1f1fa}',
    '\\u{1f1f8}\\u{1f1e6}',
    '\\u{1f1e8}\\u{1f1ed}',
    '\\u{1f1ee}\\u{1f1f3}',
    '\\u{1f1ee}\\u{1f1f1}',
    '\\u{1f1f9}\\u{1f1ed}'
]
const getFlagRegex = ()=> {
    const flagUnicode = flagUnicodeArray.join("|")
    return  `^(${flagUnicode})\\d{3}$`
}


//regex for 3D
export const D3_PATTERN = /^(0x)?(\D{0,4})?\d{3}°?$/
export const THREE_DIG = /^\d{3}$/
const AAA = /^(\d)\1{2}$/
const ABC = /^(\d)(?!\1)(\d)(?!\1|\2)(\d)$/
const ABB = /^(\d)(?!\1)(\d)\2$/
const ABA = /^(\d)(?!\1)(\d)\1$/
const AAB = /^(\d)\1(?!\1)(\d)$/
const DEGREE_360 = /^((0((0[1-9])|([1-9]\d)))|([1-2]\d\d)|(3(([0-5]\d)|(60))))°$/
const HEX_THREE_DIG = /^0x\d{3}$/
const CHINESE_NUM = "^[chineseNum]{3}$".replace("chineseNum",chineseNum)
export const CHINESE_NUM_REGE = new RegExp(CHINESE_NUM)
const japanNumRegex =  "^[japaneseNum]{3}$".replace("japaneseNum",japaneseNum)
export const JAPAN_NUM_REGEX = new RegExp(japanNumRegex)
const arabicNumRegex =  "^[arabicNum]{3}$".replace("arabicNum",arabicNum)
const ARABIC_NUM_REGEX = new RegExp(arabicNumRegex)
const FLAG_REGEX =  new RegExp(getFlagRegex(), "u")

//regex for 4D
export const D4_PATTERN = /^(0x)?\d{4}$/
const FOUR_DIG = /^\d{4}$/
const ABCD = /^(\d)(?!\1)(\d)(?!\1|\2)(\d)(?!\1|\2|\3)(\d)$/
const AAAA = /^(\d)\1{3}$/
const ABBB = /^(\d)(?!\1)(\d)\2\2$/
const AABB = /^(\d)\1(?!\1)(\d)\2$/
const AAAB = /^(\d)\1{2}(?!\1)(\d)$/
const ABAA = /^(\d)(?!\1)(\d)\1{2}$/
const AABA = /^(\d)\1(?!\1)(\d)\1$/
const ABBA = /^(\d)(?!\1)(\d)\2\1$/
const ABAB = /^(\d)(?!\1)(\d)\1\2$/
const AABC = /^(\d)\1(?!\1)(\d)(?!\1|\2)(\d)$/
const ABCC = /^(\d)(?!\1)(\d)(?!\1|\2)(\d)\3$/
const ABBC = /^(\d)(?!\1)(\d)\2(?!\1|\2)(\d)$/
const ZXXX = /^0\d{3}$/
const ZZXX = /^00\d{2}$/
const ZXZX = /^0\d0\d$/

//regex for 5D
export const D5_PATTERN = /^\d{5}$/
export const D6_PATTERN = /^\d{6}$/
export const D6_PLUS_PATTERN = /^\d{6,}|(\d{1,3}0000)$/
export const OX_DIGITS_PATTERN = /^0x[0-9a-f]{1,4}$/

/**
 * check if string is times table
 * @param str
 */
function isTimesTable(str:string){
    if(!/^[1-9]{2}\d{2}$/.test(str)){
        return false
    }
    const x = parseInt(str[0])
    const y = parseInt(str[1])
    const z = parseInt(str.slice(2,4))
    if(x>y){
        return  false
    }
    return x * y === z;

}

export interface SimpleKeyValueObject {
    [key: string]: any
}


export const REGEX_3D:SimpleKeyValueObject = {
    "999" : THREE_DIG,
    "AAA" : AAA,
    "ABC" : ABC,
    "ABB" : ABB,
    "ABA" : ABA,
    "AAB" : AAB,
    "DEGREE_360" : DEGREE_360,
    "0x999" : HEX_THREE_DIG,
    "999JP" : JAPAN_NUM_REGEX,
    "999CN" : CHINESE_NUM_REGE,
    "Arabic999" : ARABIC_NUM_REGEX,
    "Flag999" : FLAG_REGEX,
}
export const REGEX_4D:SimpleKeyValueObject = {
    "10K" : FOUR_DIG,
    "ABCD" : ABCD,
    "AAAA" : AAAA,
    "ABBB" : ABBB,
    "AABB" : AABB,
    "AAAB" : AAAB,
    "ABAA" : ABAA,
    "AABA" : AABA,
    "ABBA" : ABBA,
    "ABAB" : ABAB,
    "AABC" : AABC,
    "ABCC" : ABCC,
    "ABBC" : ABBC,
    "0XXX" : ZXXX,
    "00XX" : ZZXX,
    "0X0X" : ZXZX,
    "0XX0" : /^0\d{2}0$/,
    'XX00' : /^\d{2}00$/,
    'XX88' : /^\d{2}88$/,
    'XX69' : /^\d{2}69$/,
    'TimesTable': {test:isTimesTable},
    'MMDD' : /^(0[13578](0[1-9]|[1-2][0-9]|3[0-1]))|(02(0[1-9]|[1-2][0-9]))|(0[469](0[1-9]|[1-2][0-9]|30))|(1[02](0[1-9]|[1-2][0-9]|3[0-1]))|(11(0[1-9]|[1-2][0-9]|30))$/,
    '0x10K' : /^0x\d{4}$/,
    'Arabic10K' : new RegExp("^[arabicNum]{4}$".replace("arabicNum",arabicNum))
}
export const REGEX_5D:SimpleKeyValueObject = {
    '100K': /^\d{5}$/,
    'AAAAA': /^(\d)\1{4}$/,
    'ABCDE': /^((?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)|9(?=0)){4}\d)$/,
    'ABBBB': /^(\d)(?!\1)(\d)\2{3}$/,
    'AABBB': /^(\d)\1(?!\1)(\d)\2{2}$/,
    'AAABB': /^(\d)\1\1(?!\1)(\d)\2$/,
    'AAAAB': /^(\d)\1{3}(?!\1)(\d)$/,
    'ABBBA': /^(\d)(?!\1)(\d)\2\2\1$/,
    'ABAAA': /^(\d)(?!\1)(\d)\1{3}$/,
    'AABAA': /^(\d)\1(?!\1)(\d)\1\1$/,
    'AAABA': /^(\d)\1\1(?!\1)(\d)\1$/,
    'ABABA': /^(\d)(?!\1)(\d)\1\2\1/,
    'XABCD': /^\d((?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)|9(?=0)){3}\d)$/,
    'XX000': /^\d{2}000$/,
    '00XX0':  /^00\d{2}0$/,
    '000XX': /^000\d{2}$/,
    'XX420': /^\d{2}420$/,
    'AAABC': /^(\d)\1\1(?!\1)(\d)(?!\1|\2)(\d)$/,
    'AABBC': /^(\d)\1(?!\1)(\d)\2(?!\1|\2)(\d)$/,
    'AABCC': /^(\d)\1(?!\1)(\d)(?!\1|\2)(\d)\3$/,
    'ABCCC': /^(\d)(?!\1)(\d)(?!\1|\2)(\d)\3\3$/,
    'ABBCC': /^(\d)(?!\1)(\d)\2(?!\1|\2)(\d)\3$/,
    'ABBBC': /^(\d)(?!\1)(\d)\2\2(?!\1|\2)(\d)$/,
    'ABCBA': /^(\d)(?!\1)(\d)(?!\1|\2)(\d)\2\1$/,
    'XXX69': /^\d{3}69$/,
    '69XXX': /^69\d{3}$/,
    '00XXX': /^00\d{3}$/,
    'XXX00': /^\d{3}00$/

}
export const REGEX_6D:SimpleKeyValueObject = {
    'AAAAAA' : /^(\d)\1{5}$/,
    'ABBBBB' : /^(\d)(?!\1)(\d)\2{4}$/,
    'AABBBB' : /^(\d)\1(?!\1)(\d)\2{3}$/,
    'AAABBB' : /^(\d)\1\1(?!\1)(\d)\2\2$/,
    'AAAABB' : /^(\d)\1{3}(?!\1)(\d)\2$/,
    'AAAAAB' : /^(\d)\1{4}(?!\1)(\d)$/,
    'ABBABB' : /^(\d)(?!\1)(\d)\2\1\2\2$/,
    'ABABAB' : /^(\d)(?!\1)(\d)\1\2\1\2$/,
    'AABBCC' : /^(\d)\1(?!\1)(\d)\2(?!\1|\2)(\d)\3$/,
    'ABCCCC' : /^(\d)(?!\1)(\d)(?!\1|\2)(\d)\3{3}$/,
    'ABBBBC' : /^(\d)(?!\1)(\d)\2{3}(?!\1|\2)(\d)$/,
    'AAAABC' : /^(\d)\1{3}(?!\1)(\d)(?!\1|\2)(\d)$/,
    'ABCABC' : /^(\d)(?!\1)(\d)(?!\1|\2)(\d)\1\2\3$/,
    '00XX00' : /^00\d{2}00$/,
    'XXX420' : /^\d{3}420$/,
    '420XXX' : /^420\d{3}$/,
    'XXX000' : /^\d{3}000$/,
    '000XXX' : /^000\d{3}$/,
    'XXXX69' : /^\d{4}69$/,
    'AShareCode' : /^000|600|601|602|603\d{3}$/
}
export const REGEX_6D_PLUS:SimpleKeyValueObject = {
    'AAABBBB' : /^(\d)\1\1(?!\1)(\d)\2\2\2$/,
    'AAAABBBB' : /^(\d)\1\1\1(?!\1)(\d)\2\2\2$/,
    'ABBCBBA': /^(\d)(?!\1)(\d)\2(?!\1|\2)(\d)\2\2\1$/,
    'WanClub': /^[1-9]\d{0,2}0000$/,
    'XXXAAAAAAAA': /^1(([38]\d)|(4[75])|(5[0-3,5-9])|(66)|(7[2-3,5-8])|(9[1589]))((\d)\9{7})$/
}
export const REGEX_OX_DIGITS:SimpleKeyValueObject = {
    '0x9': /^0x\d$/,
    '0x99': /^0x\d{2}$/,
    '1HEX': /^0x[0-9a-f]$/,
    '2HEX': /^0x[0-9a-f]{2}$/,
    '3HEX': /^0x[0-9a-f]{3}$/
}