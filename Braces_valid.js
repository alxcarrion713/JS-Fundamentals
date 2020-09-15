const isValid = str => {
    if (str.length % 2 !==0) return false;

    while(str.includes('{}') || str.includes('()') || str.includes('[]')) {
        str = str.replace('{}','').replace('()','').replace('[]','');
    }
    return str === '';
}
console.log(isValid('[](){}{'))