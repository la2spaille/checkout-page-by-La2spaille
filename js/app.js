const allPlus = document.querySelectorAll('.plus')
const allMinus = document.querySelectorAll('.minus')
const allPrice = document.querySelectorAll('.price')
const allItems = document.querySelectorAll('.items')
const total = document.querySelector('.total')
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
            total.textContent = total.textContent - allPrice[index].textContent
            e.stopPropagation()
        }
    })
})