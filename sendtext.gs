function sendText(chat_id, text) {
  let data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chat_id),
      text: text,
      parse_mode: "HTML"
    }
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data)
}