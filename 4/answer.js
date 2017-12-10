const input = require('./input');
const assert = require('assert');

function question4(input) {
    let validCount = 0;
    let phraseLines = input.split('\n');
    let phrases = phraseLines.map(line => line.split(' '));
    for (let i = 0; i < phrases.length; i++) {
        let uArr = [...new Set(phrases[i])];
        if (uArr.length === phrases[i].length) {
            validCount += 1;
        }
    }
    return validCount;
}

describe('answer 4', () => {
    it('works for the example answers', () => {
        let one = 'aa bb cc dd ee';
        let two = 'aa bb cc dd aa';
        let three = 'aa bb cc dd aaa';
        assert.equal(question4(one), 1);
        assert.equal(question4(two), 0);
        assert.equal(question4(three), 1);
        console.log(question4(input));
    })
})

function question4Part2(input) {
    let validCount = 0;
    let phraseLines = input.split('\n');
    let phrases = phraseLines.map(line => line.split(' '));
    for (let i = 0; i < phrases.length; i++) {
        let uArr = [...new Set(phrases[i])];
        if (uArr.length === phrases[i].length) {
            let newAr = uArr.map(el => {
                return el.split('').sort().join('')
            })
            let filtTwo = [...new Set(newAr)];
            if (filtTwo.length === uArr.length) {
                validCount += 1;                
            }
        }
    }
    return validCount;}

describe('part 2', () => {
    it('works for the examples', () => {
const testInput = `abcde fghij
abcde xyz ecdab
a ab abc abd abf abj
iiii oiii ooii oooi oooo
oiii ioii iioi iiio`
        assert.equal(question4Part2(testInput), 3);
        console.log(question4Part2(input));
    })
})