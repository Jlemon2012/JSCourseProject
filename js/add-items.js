$(document).ready(() => {
    const addNemItemButton = $(".add__new--btn");
    const formFields = $(".add__form--fields");
    const submitNewItemButton = $("#submit_button");
    const itemNameField = $(".item__name");
    const itemPriceField = $(".item__price");
    const itemPictureField = $(".item__picture");
    const placeToAdd = $(".list__all--items")

    addNemItemButton.on("click", createForm);
    submitNewItemButton.on("click", submitItem);

    function getAllItems() {
        let allItems = [];
        for (let i = 0; i < localStorage.length; i++) {
            let storedKey = localStorage.key(i);
            let storedValue = localStorage.getItem(storedKey);
            let parsedValue = JSON.parse(storedValue);
            allItems.push(parsedValue);
        }
    
        return allItems;
    }

    function updateDisplayedItems() {
        let newDiv = $("<div>").addClass("existing__item");
        let newPicture = $("<img>").addClass("item__picture").attr("src", "#");
        let newName = $("<h4>").addClass("item__name");
        let newPrice = $("<p>").addClass("item__price");

        newDiv.append(newPicture, newName, newPrice);

        placeToAdd.append(newDiv);

        saveNewBlockToStorage();
    }

    function saveNewBlockToStorage() {
        let blocks = JSON.parse(localStorage.getItem("blocks")) || [];

        let blockInfo = {
            imageSrc: placeToAdd.find("img").attr("src"),
            nameElement: placeToAdd.find("h4").text(),
            priceElement: placeToAdd.find("p").text(),
        };

        blocks.push(blockInfo);

        localStorage.setItem("blocks", JSON.stringify(blocks));
    }

    function loadBlocksFromLocalStorage() {
        let blocks = JSON.parse(localStorage.getItem("blocks"));

        if (blocks) {
            blocks.forEach(function(blockInfo) {
                let newDiv = $("<div>").addClass("existing__item");
                let newPicture = $("<img>").addClass("item__picture").attr("src", "#");
                let newName = $("<h4>").addClass("item__name");
                let newPrice = $("<p>").addClass("item__price");

                newDiv.append(newPicture, newName, newPrice);
                placeToAdd.append(newDiv);
            });
        }
    }

    function createForm () {
        formFields.toggleClass("hidden");
    }

    function submitItem () {
        const itemName = $("#name").val();
        const itemPrice = $("#price").val();
        const itemImage = $("#picture").val();
        const currentCategory = $(".global__additems h3").text();

        const newItem = {
            id: setUniqueId(),
            name: itemName,
            price: itemPrice,
            image: itemImage,
            category: currentCategory
        }
        const setNewItem = JSON.stringify(newItem);
        window.localStorage.setItem(`itemKey_${newItem.id}`, setNewItem);
        updateDisplayedItems();
    }

    function setUniqueId () {
        return new Date().getTime();
    }

    loadBlocksFromLocalStorage();
})