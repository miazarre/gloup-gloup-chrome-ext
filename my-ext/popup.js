const pressButton = document.getElementById("button");
pressButton.addEventListener("click", () => {
  chrome.sendMessage(function (response) {
    pressButton.textContent = "Text has been changed!";
    console.log(response);
  });
});
