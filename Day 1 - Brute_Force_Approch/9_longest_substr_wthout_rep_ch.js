function longestSubstringBrute(str){
    let maxLength =0;
    let seen = new Set();  //set unique char
    for (let i =0; i < str.length ; i++){
        for(let j=i; j < str.length; j++){
            if(seen.has(str[j])){
                break;
            }
            seen.add(str[j]);
            maxLength = Math.max(maxLength, seen.size);
        }
    }
    // return seen; if you want charracter then print seen
    return maxLength
}

let Input = "abcabcdbcbb";
console.log(longestSubstringBrute(Input))


// | Start Index | Substring Checked | Stop Reason | Length |
// | ----------- | ----------------- | ----------- | ------ |
// | 0           | abc               | duplicate a | 3      |
// | 1           | bca               | duplicate b | 3      |
// | 2           | cab               | duplicate c | 3      |
// | 3           | abc               | duplicate b | 3      |
