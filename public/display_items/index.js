let containerElement = document.getElementById('contain')
const getData = async () => {
    let data = await fetch('/items');
    data.json().then((parsed) => {
    parsed.forEach((object) => {
        let pTag = document.createElement('p');
        pTag.textContent = `Name: ${object.name}, Price: ${object.price}, Inventory: ${object.inventory}, Next Delivery: ${object.nextDelivery}, Delivery Amount: ${object.deliveryAmt}`
        containerElement.appendChild(pTag)
    })});
}
getData()

let addItemsButton = document.getElementById('add')
addItemsButton.addEventListener('click', () => {
    window.location.href = "../"
})