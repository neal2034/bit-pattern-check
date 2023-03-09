

export interface ITestData{
    data:string,
    expect: string[]
}


export const testData:ITestData[] = [
    {data:"001", expect: ['999']},
    {data:"003", expect: ['999']},
    {data:"004", expect: ['999']},
]