/**
 * this file record all test data
 */
export interface ITestData{
    data:string,
    expect: string[]
}


export const testData:ITestData[] = [
    {data:"001", expect: ['999', 'AAB']},
    {data:"333", expect: ['999', 'AAA']},
    {data:"123", expect: ['999', 'ABC']},
    {data:"122", expect: ['999', 'ABB']},
    {data:"121", expect: ['999', 'ABA']},
    {data:"112", expect: ['999', 'AAB']},
    {data:"153°", expect: ['DEGREE_360']},
    {data:"0x000", expect: ['0x999', '3HEX']},
    {data:"壱漆壱", expect: ['999JP']},
    {data:"七零八", expect: ['999CN']},
    {data:"٣٩٣", expect: ['Arabic999']},
    {data:"🇺🇸105", expect: ['Flag999']},
    {data:"🇺🇳799", expect: ['Flag999']},
    {data:"3312", expect: ['10K','AABC']},
    {data:"1234", expect: ['10K','ABCD']},
    {data:"1111", expect: ['10K','AAAA','MMDD']},
    {data:"2111", expect: ['10K','ABBB']},
    {data:"2233", expect: ['10K','AABB']},
    {data:"2224", expect: ['10K','AAAB']},
    {data:"2322", expect: ['10K','ABAA']},
    {data:"2232", expect: ['10K','AABA']},
    {data:"4334", expect: ['10K','ABBA']},
    {data:"4343", expect: ['10K','ABAB']},
    {data:"4435", expect: ['10K','AABC']},
    {data:"4355", expect: ['10K','ABCC']},
    {data:"4335", expect: ['10K','ABBC']},
    {data:"0335", expect: ['10K','0XXX','ABBC']},
    {data:"0035", expect: ['10K','00XX', '0XXX', 'AABC']},
    {data:"0505", expect: ['10K','0X0X', '0XXX', 'ABAB','MMDD']},
    {data:"0550", expect: ['10K','0XX0', '0XXX', 'ABBA']},
    {data:"5500", expect: ['10K', 'XX00', 'AABB']},
    {data:"5588", expect: ['10K', 'XX88', 'AABB']},
    {data:"3269", expect: ['10K', 'XX69', 'ABCD']},
    {data:"3515", expect: ['10K', 'TimesTable']},
    {data:"1130", expect: ['10K', 'MMDD','AABC']},
    {data:"0x0131", expect: ['0x10K']},
    {data:"٧٩٨٦", expect: ['Arabic10K']},
    {data: '12245', expect:['100K']},
    {data: '22222', expect:['100K', 'AAAAA']},
    {data: '12345', expect:['100K', 'ABCDE', 'XABCD']},
    {data: '12222', expect:['100K', 'ABBBB']},
    {data: '22333', expect:['100K', 'AABBB']},
    {data: '22233', expect:['100K', 'AAABB']},
    {data: '22223', expect:['100K', 'AAAAB']},
    {data: '34443', expect:['100K', 'ABBBA']},
    {data: '34333', expect:['100K', 'ABAAA']},
    {data: '33433', expect:['100K', 'AABAA']},
    {data: '33343', expect:['100K', 'AAABA']},
    {data: '32323', expect:['100K', 'ABABA']},
    {data: '44567', expect:['100K', 'XABCD']},
    {data: '45000', expect:['100K', 'XX000', 'ABCCC','XXX00']},
    {data: '00550', expect:['100K', '00XX0','00XXX']},
    {data: '00055', expect:['100K', '000XX', 'AAABB','00XXX']},
    {data: '55420', expect:['100K', 'XX420']},
    {data: '11157', expect:['100K', 'AAABC']},
    {data: '33445', expect:['100K', 'AABBC']},
    {data: '33455', expect:['100K', 'AABCC']},
    {data: '34555', expect:['100K', 'ABCCC']},
    {data: '34455', expect:['100K', 'ABBCC']},
    {data: '34445', expect:['100K', 'ABBBC']},
    {data: '34543', expect:['100K', 'ABCBA']},
    {data: '34569', expect:['100K', 'XXX69']},
    {data: '69780', expect:['100K', '69XXX']},
    {data: '00789', expect:['100K', '00XXX']},
    {data: '78800', expect:['100K', 'XXX00','ABBCC']},
    {data: '222222', expect:['AAAAAA']},
    {data: '322222', expect:['ABBBBB']},
    {data: '332222', expect:['AABBBB']},
    {data: '333222', expect:['AAABBB']},
    {data: '333322', expect:['AAAABB']},
    {data: '333332', expect:['AAAAAB']},
    {data: '322322', expect:['ABBABB']},
    {data: '343434', expect:['ABABAB']},
    {data: '445566', expect:['AABBCC']},
    {data: '346666', expect:['ABCCCC']},
    {data: '355556', expect:['ABBBBC']},
    {data: '777789', expect:['AAAABC']},
    {data: '789789', expect:['ABCABC']},
    {data: '003500', expect:['00XX00']},
    {data: '345420', expect:['XXX420']},
    {data: '420389', expect:['420XXX']},
    {data: '235000', expect:['XXX000']},
    {data: '000389', expect:['000XXX','AShareCode']},
    {data: '325369', expect:['XXXX69']},
    {data: '000235', expect:['AShareCode','000XXX']},
    {data: '14788888888', expect:['XXXAAAAAAAA']},
    {data: '3334444', expect:['AAABBBB']},
    {data: '33334444', expect:['AAAABBBB']},
    {data: '4335334', expect:['ABBCBBA']},
    {data: '120000', expect:['WanClub','ABCCCC', 'XXX000']},
    {data: '0x9', expect:['0x9','1HEX']},
    {data: '0x92', expect:['0x99','2HEX']},
    {data: '0xa', expect:['1HEX']},
    {data: '0xa2', expect:['2HEX']},
    {data: '0x1a2', expect:['3HEX']},
]