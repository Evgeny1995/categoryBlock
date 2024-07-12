import './style/style.css'
const pesticides = document.querySelector('.pesticides')


const leaf1 = document.querySelector('.green_leaf');
const leaf2 = document.querySelector('.brown_leaf');
const arr = [30,31,32,33,34]

const coordinates = {
    "pesticides": 30,
    "cultures": 31,
    "pests": 32,
    "active_substances": 33,
}
 function leafMoving(itemSelector) {
    const listItems = document.querySelectorAll('.categories_item')
    listItems.forEach((element, index) => {
        element.addEventListener("mouseover", (event) => {
            leaf1.style.left = `${index}%`
            arr.map((item)=> (
            leaf2.style.right = `${coordinates[element.classList[1]]}%`
            ))
        });
    })


}
leafMoving()