let bidButton = document.getElementById("bid-button");
let dialog = document.getElementById("dialog");
bidButton.addEventListener('click', function() {
    dialog.classList.add("active");
});
let okButton = document.getElementById("ok-dialog-button");
okButton.addEventListener('click', function() {
    if (dialog.classList.contains("active")) {
        dialog.classList.remove("active");
        document.getElementById("cur-bid").innerHTML = "Current Bid: $ YOUR BID";
    }
});
let cancelButton = document.getElementById("cancel-dialog-button");
cancelButton.addEventListener('click', function() {
    if (dialog.classList.contains("active")) {
        dialog.classList.remove("active");
    }
});