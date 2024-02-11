$(document).ready(() => {
    const itemsCategory = $(".additems__category li");

    itemsCategory.on("click", goToCategory)

    function goToCategory() {
        switch ($(this).text()) {
            case "Printers":
                window.open("../products/printers.html");
                break;
            case "Monitors":
                window.open("../products/monitors.html");
                break;
            case "Headsets":
                window.open("../products/headsets.html");
                break;
            case "Storage":
                window.open("../products/storage.html");
                break;
            case "Processors":
                window.open("../products/processors.html");
                break;
            case "Mouse":
                window.open("../products/mouse.html");
                break;
        }
    }
})