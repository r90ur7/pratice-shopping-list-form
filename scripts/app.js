document.addEventListener("DOMContentLoaded",function() {
    const list = []

    const items = document.querySelector(".shopping-items")
    const form = document.querySelector(".shopping-form")
    const intemInput = document.querySelector(".shopping-form-item-input")
    const quantityinput = document.querySelector(".shopping-form-quantity-input");
    const incrementButton = document.querySelector(".shopping-form-increment-button");
    const decrementButton = document.querySelector(".shopping-form-decrement-button");

    incrementButton.addEventListener("click",incrementQuantity);
    decrementButton.addEventListener("click",decrementQuantity);
    form.addEventListener("submit", addItemToList);
    function addItemToList(event){
        event.preventDefault();
        const itemName = event.target["item-name"].value;
        const itemQuantity = event.target["item-quantity"].value;
        if(itemName != ""){
            const item = {
                name: itemName,
                quantity:itemQuantity,
            }
            list.push(item);
            renderListItems();
            resetInput();
        }

    }
    function incrementQuantity(){
        const currentValue =Number(quantityinput.value);
        const newValue = currentValue + 1;
    
        quantityinput.value = newValue;
    }

    function decrementQuantity(){
        if(Number(quantityinput.value) > 1 ){
            const currentValue =Number(quantityinput.value);
            const newValue = currentValue - 1;

            quantityinput.value = newValue;
        }
    }
    function renderListItems(){
        let itemsStructure = "";

        list.forEach(function(item){
            itemsStructure += `
            <li class="shopping-item">
                <span>${item.name}</span>
                <span>${item.quantity}</span>
            </li>
            `
            ;
        });
        items.innerHTML =itemsStructure;
    }
    function resetInput(){
        intemInput.value = "";
        quantityinput.value = 1
    }
});