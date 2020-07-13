/**
 * [Format] format money
 * @param {*} number 
 */
let formatNumber = (number) => {
    var nf = Intl.NumberFormat();
    return nf.format(number)
}

export {formatNumber}