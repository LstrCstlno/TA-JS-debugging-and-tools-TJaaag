// #### Write your implementation of testing framework and assertion. Only after completing this go forward.
// testing framework is a testing fuction that lets us test multiple lines of code at the same time between the actual result and expected result, wether its an error or not, we can see all the results at the same time without the excecution getting cut, abd also we get displayed a friendly message.

// assertion is basically when the same line of code is repeated multiple times by the testing framework, we write a simpler code / function library that simplifies the testing framework so that it called much more easily and testing gets easier

function sum(num1 = 0, num2 = 0) {
    return num1 + num2
}

function sumTest1() {
    result = sum(6,4)
    expected = 10
    expect(result).toEqual(expected)
}

function sumTest2() {
    result = sum(6,4)
    expected = 11
    expect(result).toEqual(expected)
}

function sumTest3() {
    result = sum(4,4)
    expected = 8
    expect(result).toEqual(expected)
}

function sumTest4() {
    result = sum(4,4)
    expected = 10
    expect(result).toEqual(expected)
}

function sumTest5() {
    result = sum(10,10)
    expected = "rabbit"
    expect(result).toEqualtype(expected)
}

//testing framework
function test(message,callBack) {
    try {
        callBack();
        console.log(`${message} test successful`);
    } catch (error) {
        console.error(error);
        console.log(`${message} test unsuccessful`);
    }
}

//testing assertion
function expect(result){
return {
    toEqual: function (expected){
        if (result != expected) {
            throw new Error (`${result} is not equal to ${expected}`)
        }
    },
    toEqualtype : function(expected) {
        if (typeof result != typeof expected) {
            throw new Error (`${typeof result} is not equal to ${typeof expected}`)
        }
    }
}
}

function product(numA,numB) {
    return numA*numB;
}

function prodTest1(){
result = product(5,5)
expected = 25;
expect(result).toEqual(expected)
}

function prodTest2(){
    result = product(5,5)
    expected = "twenty five";
    expect(result).toEqualtype(expected)
    }

function prodTest3(){
    result = product(5,5)
    expected = 30;
    expect(result).toEqual(expected)
    }

function prodTest4(){
    result = product(3,5)
    expected = 15;
    expect(result).toEqual(expected)
    }

function prodTest5(){
    result = product(3,6)
    expected = 15;
    expect(result).toEqual(expected)
    }