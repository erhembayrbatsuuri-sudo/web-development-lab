
// Dark Mode товч
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.innerHTML = "Light Mode";
    }
    else {
        themeButton.innerHTML = "Dark Mode";
    }

});

// Зураг эргүүлэх
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        card.classList.toggle("active");

    });

});
