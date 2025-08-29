document.addEventListener("DOMContentLoaded", function() {
    var amount = localStorage.getItem("depositAmount");
    var paymentMethod = localStorage.getItem("paymentMethod");
    var confirmationText = "You have chosen to deposit " + amount +  "$" +   " worth of " + paymentMethod + "\n";
    var confirmationElement = document.getElementById("confirmation");
    confirmationElement.textContent = confirmationText;
});
