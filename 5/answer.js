const input = require('./input');

const iArr = input.split('\n').map(el => parseInt(el));

// let index = 0;
// let steps = 0;

// while(true) {
//     if(iArr[index] === undefined) {
//         break;
//     } else {
//         let existingIndex = index;
//         index += iArr[existingIndex];
//         iArr[existingIndex] += 1;
//     }
//     steps += 1;    
// }

// console.log(steps);

let index2 = 0;
let steps2 = 0;

while(true) {
    if(iArr[index2] === undefined) {
        break;
    } else {
        let existingIndex = index2;
        index2 += iArr[existingIndex];
        if (iArr[existingIndex] >= 3) {
            iArr[existingIndex] -= 1;
        } else {
            iArr[existingIndex] += 1;
        }
    }
    steps2 += 1;    
}

console.log(steps2);