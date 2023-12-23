//  (-12,-15,-25,15,36,7,48)
// Max: 48
// 1-usul

console.log(Math.max(-12,-15,-25,15,36,7,48));

// 2-usul

const array = [-12,-15,-25, 15,36, 7,48]

console.log(Math.max(...array));

// 3-usul

 function max(...numbers){
    let result = -Infinity;
    for (let number of numbers){
        if(number > result) result = number
    }
    return result
 }
 console.log(max(4,8,1,10,48,50,68,57));