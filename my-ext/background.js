chrome.alarms.onAlarm.addListener(() => {
  chrome.notifications.create(
    {
      type: "basic",
      iconUrl: "icon-water-bottle.png",
      title: "Gloup Gloup",
      message: "Time to drink some water !",
      silent: false,
    },
    () => {}
  );
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  if (request.time) createAlarm();

  sendResponse({ success: true });
});

function createAlarm() {
  chrome.alarms.create("hydrate_yourself", {
    delayInMinutes: 60,
    periodInMinutes: 60,
  });
}
