$(document).ready(() => {
    const addNemItemButton = $(".add__new--btn");
    const formFields = $(".add__form--fields");
    const submitNewItemButton = $("#submit_button");
    const itemNameField = $(".item__name");
    const itemPriceField = $(".item__price");
    const itemPictureField = $(".item__picture");
    const placeToAdd = $(".list__all--items")
    let nameOfItem;
    let priceOfItem;
    let pictureUrl;

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
        for (let i=0; i<allItems.length; i++) {
            if (allItems[i].category == "Printers") {
                nameOfItem = allItems[i].item;
                priceOfItem = allItems[i].price;
                pictureUrl = allItems[i].image;
            }
        }
    }

    function updateDisplayedItems() {
        getAllItems();

        let newDiv = $("<div>").addClass("existing__item");
        let newPicture = $("<img>").addClass("item__picture").attr("src", `${pictureUrl}`);
        let newName = $("<h4>").addClass("item__name").text(nameOfItem);
        let newPrice = $("<p>").addClass("item__price").text(priceOfItem);


        newDiv.append(newPicture, newName, newPrice);

        placeToAdd.append(newDiv);

        saveNewBlockToStorage();

        allItems = [];
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
                let newPicture = $("<img>").addClass("item__picture").attr("src", `blockInfo.imageSrc`);
                let newName = $("<h4>").addClass("item__name").text(blockInfo.nameElement);
                let newPrice = $("<p>").addClass("item__price").text(blockInfo.priceElement);
                // let newPicture = blockInfo.imageSrc;
                // let newName = blockInfo.nameElement;
                // let newPrice = blockInfo.priceElement;

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
            item: itemName,
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