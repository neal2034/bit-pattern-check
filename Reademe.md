# Bit Account Pattern Check

## Description
This module is used to detect patterns of bit account at [https://rare.id ](https://rare.id)

## Design Principle
This module is designed follow open-closed principle, it will be open for extension and closed for modification;
And also this module use strategy design pattern;

## How To
### 1. How to run
1. install required module
    ```
     npm install
    ```
2. running test with follow command, and the result will be print to console
    ```
     npm run test
    ```
### 2. How to add test cases
The test is drive by test data in src/constant/testData.ts.
If you want to add more test case, just add more test data in this file

### 3. How to add more patterns
The patterns are all based on regex, if there are more patterns, just add it in src/constant/regex.ts

