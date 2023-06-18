const reminderButton = document.getElementById("set-reminder");

reminderButton.addEventListener("click", () => {
  chrome.runtime.sendMessage({ time: "1" }, function (response) {
    console.log(response);
  });
  reminderButton.textContent = "It's done !";
});
