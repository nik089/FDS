function checkPalindrome(str){
    for(let i= 0; i<= str.length/2; i++){
        if(str[i] != str[str.length-1-i]){
            return false;

        }
    }
    return true
}

console.log(checkPalindrome('malylam')) // true


// | i | str[i] | str.length-1-i | str[str.length-1-i] | Equal? | Action   |
// | - | ------ | -------------- | ------------------- | ------ | -------- |
// | 0 | m      | 6              | m                   | ✅      | Continue |
// | 1 | a      | 5              | a                   | ✅      | Continue |
// | 2 | l      | 4              | l                   | ✅      | Continue |
// | 3 | y      | 3              | y                   | ✅      | Continue |
