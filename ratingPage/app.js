let buttons = document.querySelectorAll('#buttons button');
let submitBtn = document.getElementById('submitBtn');
let thankyouPage = document.getElementById('thankyou');
let selectedRating;
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        selectedRating = button.getAttribute('data-rating');
        buttons.forEach(function (btn) {
            btn.style.backgroundColor = "#f0f0f0"
            btn.style.color = "#000"
        });
        button.style.backgroundColor = "orange";
    });
});

submitBtn.addEventListener('click', function () {
    if (selectedRating) {
        document.getElementById('rating').innerText = `You selected ${selectedRating} out of 5`;
        thankyouPage.style.display = "block";
        document.getElementById('ratingPage').style.display = "none";
    } else {
        alert("Please select a rating before submitting.");
    }
});

