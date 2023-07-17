function setWebhook() {
  let url = telegramUrl + "/setWebhook?url=" + webAppUrl;
  let response = UrlFetchApp.fetch(url);
  console.log(response.getContentText());
}

function deleteWebhook() {
  let url = telegramUrl + "/deleteWebhook?url=" + webAppUrl;
  let response = UrlFetchApp.fetch(url);
  console.log(response.getContentText());
}