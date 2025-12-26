
function hasDuplicate(arr){
    for(let i =0; i < arr.length; i++){
        for(let j=i+1; j < arr.length; j++){
            if(arr[i]=== arr[j]) return true;
        }
    }
    return false;

}

// let arr = [1, 2, 3]  // false
let arr = [1, 2, 3,2,3]  // true
console.log(hasDuplicate(arr)); // false