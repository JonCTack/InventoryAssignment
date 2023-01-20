let sendItemButton = document.getElementById('send-item');
sendItemButton.addEventListener('click', async () =>{
    let nameString = document.getElementById('name-i').value
    let priceNum = +document.getElementById('price-i').value
    let invNum = +document.getElementById('inv-i').value
    let dateVal = document.getElementById('date-i').value
    let deliveryNum = +document.getElementById('delivery-i').value
    const item = {
        nameString,
        priceNum,
        invNum,
        dateVal,
        deliveryNum
    }
    let response = await fetch('/create_items',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
    })
    let uploadStatusTag = document.getElementById('upload-status');
    console.log(response.status);
    if (response.status === 200) {
        console.log(response);
        console.log("upload complete!!!");
        uploadStatusTag.textContent = "Upload Completed";
        uploadStatusTag.style.color = "green";
    } else {
        console.log(response);
        console.log("upload failed");
        console.log;
        uploadStatusTag.textContent = "Upload Failed";
        uploadStatusTag.style.color = "red";
    }
})

let displayItemsButton = document.getElementById('display-items')
displayItemsButton.addEventListener('click', () => {
    window.location.href = "./display_items"
})