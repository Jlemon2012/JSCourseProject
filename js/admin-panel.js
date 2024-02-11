$(document).ready(() => {
    const addNewItem = $("#add__new--item")
    const itemsCategory = $(".additems__category li");
    const itemsMenu = $(".additems__menu");
    const printerCategory = $(".additems__printers");
    const monitorCategory = $(".additems__monitors");
    const headsetsCategory = $(".additems__headsets");
    const storageCategory = $(".additems__storage");
    const processorsCategory = $(".additems__processors");
    const mouseCategory = $(".additems__mouse");
    const itemInfoFill = $(".add__form--fields")

    itemsCategory.on("click", goToCategory)
    addNewItem.on("click", addingItemFields)

    function addingItemFields() {
        itemInfoFill.toggleClass("hidden");
    }

    function goToCategory() {
        switch ($(this).text()) {
            case "Printers":
                printerCategory.toggleClass("hidden");
                itemsMenu.addClass("hidden");
            case "Monitors":
                monitorCategory.toggleClass("hidden");
                itemsMenu.addClass("hidden");
            case "Headsets":
                headsetsCategory.toggleClass("hidden");
                itemsMenu.addClass("hidden");
            case "Storage":
                storageCategory.toggleClass("hidden");
                itemsMenu.addClass("hidden");
            case "Processors":
                processorsCategory.toggleClass("hidden");
                itemsMenu.addClass("hidden");
            case "Mouse":
                mouseCategory.toggleClass("hidden");
                itemsMenu.addClass("hidden");
        }
    }
})