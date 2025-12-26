
function findAllPaires(arr, target){
    let paires =[];
    for(let i=0; i<arr.length;i++){
        for(j=i+1; j<arr.length;j++){
            if((arr[i] + arr[j])=== target){
                paires.push([arr[i], arr[j]]);
            }
        }
    }
    return paires;
}

let arr = [1, 5, 7, -1, 5]
let k = 6
console.log(findAllPaires(arr, k)); //[ [ 1, 5 ], [ 1, 5 ], [ 7, -1 ] ]