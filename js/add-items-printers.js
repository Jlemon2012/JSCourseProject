$(document).ready(() => {
    const addNewItemButton = $(".add__new--btn");
    const formFields = $(".add__form--fields");
    const submitNewItemButton = $("#submit_button");
    const placeToAdd = $(".list__all--items");
    const currentCategory = $(".additems__printers h3").text();

    addNewItemButton.on("click", createForm);
    submitNewItemButton.on("click", submitItem);

    function updateDisplayedItems(itemInfo) {
        if (itemInfo.category === "Printers") {
            let newDiv = $("<div>").addClass("existing__item");
            let newPicture = $("<img>").addClass("item__picture").attr("src", itemInfo.imageSrc);
            let newName = $("<h4>").addClass("item__name").text(itemInfo.nameElement);
            let newPrice = $("<p>").addClass("item__price").text(itemInfo.priceElement);

            newDiv.append(newPicture, newName, newPrice);
            placeToAdd.append(newDiv);
        }
    }

    function saveNewBlockToStorage(itemInfo) {
        let blocks = JSON.parse(localStorage.getItem("blocks")) || [];

        let isUnique = blocks.every(block => block.nameElement !== itemInfo.nameElement);

        if (isUnique) {
            blocks.push(itemInfo);
            localStorage.setItem("blocks", JSON.stringify(blocks));
        } else {
            console.error("Block with the same name already exists.");
        }
    }

    function generateUniqueId() {
        return new Date().getTime();
    }

    function loadBlocksFromLocalStorage() {
        let blocks = JSON.parse(localStorage.getItem("blocks")) || [];
        blocks.filter(block => block.category === "Printers")
            .forEach(function (blockInfo) {
                updateDisplayedItems(blockInfo);
            });
    }

    function createForm() {
        formFields.toggleClass("hidden");
    }

    function submitItem() {
        const itemName = $("#name").val();
        const itemPrice = $("#price").val();
        const itemImage = $("#picture").val();

        const newItemInfo = {
            id: generateUniqueId(),
            imageSrc: itemImage,
            nameElement: itemName,
            priceElement: itemPrice,
            category: currentCategory,
        };

        updateDisplayedItems(newItemInfo);
        saveNewBlockToStorage(newItemInfo);
        formFields.toggleClass("hidden");
    }

    loadBlocksFromLocalStorage();
});