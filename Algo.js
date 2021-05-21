function convertfahrToCelsius(fahr) {
    let celsius =(fahr - 32) * 5/9;

    if (Array.isArray(fahr)) {
        return (`${JSON.stringify(fahr)} is not a valid number but a/an array`)
    }else if ( isNaN(fahr) || typeof (fahr)=== "boolean") {
        return (`${JSON.stringify(fahr)} is not a valid number but a/an ${typeof(fahr)}`)
    } else {
        return celsius.toFixed(4)
    }
    
}
console.log(convertfahrToCelsius({temp: 0}))
console.log(convertfahrToCelsius(0));
console.log(convertfahrToCelsius(1,2,3))
console.log(convertfahrToCelsius[1,2,3])

function checkYuGiOh(n) {
    let outPut = [];
    for (let i = 1; i <= n; i++) {
         if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
             outPut.push("yu-gi-oh")
        } else if (i % 3 === 0 && i % 5 === 0){
            outPut.push("gi-oh")
        } else if (i % 2 === 0 && i % 5 === 0){
            outPut.push("yu-oh")
        } else if (i % 2 === 0 && i % 3 === 0){
            outPut.push("yu-gi")
        } else if (i % 5 === 0)  {
            outPut.push("oh")
        } else if (i % 3 === 0)  {
            outPut.push("gi")
        } else if (i % 2 === 0)  {
            outPut.push("yu")
        } else{
            outPut.push(i)
        }
    }return outPut
    } 
console.log(checkYuGiOh(28));