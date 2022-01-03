const allPlus = document.querySelectorAll('.plus')
const allMinus = document.querySelectorAll('.minus')
var allPrice = document.querySelectorAll('.price')
var allItems = document.querySelectorAll('.items')
const total = document.querySelector('.total')
var decimal
var decimalFixed

allPlus.forEach((plus,index) => {
    plus.addEventListener('click' , (e) => {
        allItems[index].textContent = allItems[index].textContent - -1;
        total.textContent = total.textContent - - allPrice[index].textContent
        e.stopPropagation()
    })
})
allMinus.forEach((minus,index) => {
    minus.addEventListener('click' , (e) => {
        if (allItems[index].textContent > 1) {
            allItems[index].textContent = allItems[index].textContent  - 1;
            decimal = total.textContent - allPrice[index].textContent
            decimalFixed = decimal.toFixed(2)
            total.textContent = decimalFixed
            e.stopPropagation()
        }
    })
})