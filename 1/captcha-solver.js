const assert = require('assert');
const part1 = require('./puzzle-input');

describe('Captcha solver part 1', ()  => {
    it('Works for the example cases', () => {
        assert.equal(solver('1122'), 3);

        assert.equal(solver('1111'), 4);

        assert.equal(solver('1234'), 0);

        assert.equal(solver('91212129'), 9);
    })

    it('Answers using the input', () => {
        console.log(solver(part1));
    })
})

describe('Captcha solver part 2', () => {
    it('Works for the example cases', () => {
        assert.equal(solver2('1212'), 6);
        assert.equal(solver2('1221'), 0);
        assert.equal(solver2('123425'), 4);
        assert.equal(solver2('123123'), 12);
        assert.equal(solver2('12131415'), 4);
    })

    it('Answers using the input', () => {
        console.log(solver2(part1));
    })
})

function solver(inputString) {
    let sum = 0;

    for (let i = 0; i < inputString.length; i++) {
        let number1Char = inputString.charAt(i);
        let number2Char = inputString.charAt((i + 1) % inputString.length);

        if (number1Char === number2Char) {
            sum += parseInt(number1Char);
        }
    }

    return sum;
}

function solver2(inputString) {
    let sum = 0;

    for (let i = 0; i < inputString.length; i++) {
        let number1Char = inputString.charAt(i);
        let number2Char = inputString.charAt((i + (inputString.length / 2)) % inputString.length);

        if (number1Char === number2Char) {
            sum += parseInt(number1Char);
        }
    }

    return sum;
}