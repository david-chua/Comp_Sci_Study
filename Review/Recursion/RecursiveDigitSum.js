function superDigit(n, k) {
    // before we create p, why not sum n together first?
    let singleN = superDigitRecursive(n)
    let p = concatenate(singleN.toString(), k)
    return superDigitRecursive(p)
}
function superDigitRecursive(p){
    // First thing is the base case
    if (p.length === 1){
        return p;
    }
    let sum = sumDigits(p);
    return superDigitRecursive(sum.toString())
}
function sumDigits(p){
    let sum = 0;
    for (let num of p){
        sum += parseInt(num)
    }
    return sum;
}
function concatenate(n,k){
   return n.repeat(k)
}
