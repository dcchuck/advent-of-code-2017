const puzzleInputs = require('./puzzle-input');
const assert = require('assert');

let linesArray = puzzleInputs.split('\n');

let inputArray = linesArray.map(line => line.split('\t'));

function parseInput(inputString) {
    let linesArray = inputString.split('\n');
    let inputArray = linesArray.map(line => line.split('\t'));
    return inputArray;
}

const exampleInput = 
`5\t1\t9\t5
7\t5\t3
2\t4\t6\t8`;

describe('checksummer', () => {
    it('works for the example cases', () => {
        let exampleParsed = parseInput(exampleInput);
        assert.equal(checkSum(exampleParsed), 18);
    })
    it('answers the question', () => {
        let qParsed = parseInput(puzzleInputs);
        console.log(checkSum(qParsed));
    });
})

function checkSum(parsedInput) {
    let sum = 0;
    parsedInput.forEach(element => {
        element.sort((a,b) => a - b);
        sum += (element[element.length - 1] - element[0]);
    });
    return sum;
}

const otherInput = `5\t9\t2\t8
9\t4\t7\t3
3\t8\t6\t5`

describe('other summer', () => {
    let exampleParsed = parseInput(otherInput);
    assert.equal(otherSum(exampleParsed), 9);
    console.log(otherSum(parseInput(puzzleInputs)));
})

function otherSum(parsedInput) {
    let sum = 0;
    parsedInput.forEach(elementArr => {
        sum += dividedQuantity(elementArr);
    });
    return sum;
}

function dividedQuantity(elArr) {
    elArr.sort((a,b) => a - b);
    for(let i = elArr.length -1; i > 0; i--) {
        for(let j = i - 1; j >= 0; j--) {
            if (isDivisible(elArr[i], elArr[j])) {
                return elArr[i]/elArr[j];
            }
        }
    }
}

function isDivisible(el1, el2) {
    let div = el1 / el2;
    let dS = div.toString();
    return !dS.includes('.');
}