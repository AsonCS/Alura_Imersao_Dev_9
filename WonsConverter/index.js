const umwon = 0.004
const test1 = {
    "10 + 2": 10 + 2,
    "10 + '2'": 10 + '2',
    "-'10' + 2": -'10' + 2,
    "'10' + '2'": '10' + '2',
    "'10' / '2'": '10' / '2',
    "'10' * '2'": '10' * '2'
};

(() => {
    console.log('umwon', umwon)
    document.getElementById('btn-converter').addEventListener('click', onClickConverter)
})()

/**
 * 
 * @param {Event} e 
 */
function onClickConverter(e) {
    e.preventDefault()
    const wons = parseFloat(
        document.getElementById('wons').value
    )
    document.getElementById('result').innerText = `${valueToString(wons)} wons valem R$ ${valueToString(wons * umwon)}`
}

/**
 * 
 * @param {number} value 
 */
function valueToString(value) {
    const parts = value.toFixed(2).split('.')
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    const decimalPart = parts[1]
    return `${integerPart},${decimalPart}`
}

function onLoad() {
    console.log('test1', test1)
}
