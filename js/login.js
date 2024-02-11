$(document).ready(() => {
    const form = $(".login__form");
    const submitButton = $("#submit");

    submitButton.on("click", function (event) {
      event.preventDefault(); // Prevent the default form submission

      const login = form.find("#login").val();
      const password = form.find("#password").val();

      validateData(login, password);
    });

    function validateData(login, password) {
      if (login === "admin" && password === "admin") {
        window.open("./admin_panel.html");
      } else {
        alert("Invalid login or password");
      }
    }
  });