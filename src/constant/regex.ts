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

//pattern regex
export const D3_PATTERN = /^(0x)?(\D{0,4})?\d{3}°?$/
export const D4_PATTERN = /^(0x)?\d{4}$/
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
    "999" :  /^\d{3}$/,
    "AAA" : /^(\d)\1{2}$/,
    "ABC" : /^(\d)(?!\1)(\d)(?!\1|\2)(\d)$/,
    "ABB" : /^(\d)(?!\1)(\d)\2$/,
    "ABA" : /^(\d)(?!\1)(\d)\1$/,
    "AAB" :  /^(\d)\1(?!\1)(\d)$/,
    "DEGREE_360" : /^((0((0[1-9])|([1-9]\d)))|([1-2]\d\d)|(3(([0-5]\d)|(60))))°$/,
    "0x999" : /^0x\d{3}$/,
    "999JP" : new RegExp("^[japaneseNum]{3}$".replace("japaneseNum",japaneseNum)),
    "999CN" : new RegExp("^[chineseNum]{3}$".replace("chineseNum",chineseNum)),
    "Arabic999" : new RegExp("^[arabicNum]{3}$".replace("arabicNum",arabicNum)),
    "Flag999" : new RegExp(getFlagRegex(), "u"),
}
export const REGEX_4D:SimpleKeyValueObject = {
    "10K" : /^\d{4}$/,
    "ABCD" : /^(\d)(?!\1)(\d)(?!\1|\2)(\d)(?!\1|\2|\3)(\d)$/,
    "AAAA" : /^(\d)\1{3}$/,
    "ABBB" : /^(\d)(?!\1)(\d)\2\2$/,
    "AABB" : /^(\d)\1(?!\1)(\d)\2$/,
    "AAAB" : /^(\d)\1{2}(?!\1)(\d)$/,
    "ABAA" : /^(\d)(?!\1)(\d)\1{2}$/,
    "AABA" : /^(\d)\1(?!\1)(\d)\1$/,
    "ABBA" : /^(\d)(?!\1)(\d)\2\1$/,
    "ABAB" : /^(\d)(?!\1)(\d)\1\2$/,
    "AABC" : /^(\d)\1(?!\1)(\d)(?!\1|\2)(\d)$/,
    "ABCC" : /^(\d)(?!\1)(\d)(?!\1|\2)(\d)\3$/,
    "ABBC" : /^(\d)(?!\1)(\d)\2(?!\1|\2)(\d)$/,
    "0XXX" : /^0\d{3}$/,
    "00XX" : /^00\d{2}$/,
    "0X0X" :  /^0\d0\d$/,
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