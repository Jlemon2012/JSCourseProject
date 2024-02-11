$(document).ready(() => {
    const addNemItemButton = $(".add__new--btn");
    const formFields = $(".add__form--fields");
    const submitNewItemButton = $("#submit_button")

    addNemItemButton.on("click", createForm);
    submitNewItemButton.on("click", submitItem);

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
    }

    function setUniqueId () {
        return new Date().getTime();
    }
})