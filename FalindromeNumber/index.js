function checknums(nums) {
    if ( nums < 0 ) return false;
    else {
        if ( nums == parseFloat(nums.toString().split("").reverse().join("")) ) return true; else return false;
    }
}

console.log(checknums(212))