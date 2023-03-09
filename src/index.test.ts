import {detectPatterns} from "./index";
import {deepEqual} from "assert";
import {ITestData, testData} from "./constant/testData";

/**
 * do pattern check test
 * @param data
 */
function doTest(data:ITestData[]){
    let fail = 0
    const failData:ITestData[] = []
    data.forEach(dataItem=>{
        try {
            deepEqual(detectPatterns(`${dataItem.data}.bit`), new Set(dataItem.expect))
        }catch (err){
            failData.push(dataItem)
            fail++;

        }
    })

    // print the result
    console.log("There are total", data.length, "test")
    if(failData.length>0){
        console.log("There are", fail, "tests failed")
        console.log("Below are failed test data")
        failData.forEach(data=>{
            console.log(data)
        })
    }else{
        console.log("All tests pass")
    }
}


doTest(testData)