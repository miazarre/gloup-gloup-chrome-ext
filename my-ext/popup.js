const pressButton = document.getElementById("button");

pressButton.addEventListener("click", () => {
  chrome.runtime.sendMessage({ time: "1" }, function (response) {
    console.log(response);
  });
});
