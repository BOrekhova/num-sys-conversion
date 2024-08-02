function doPost(e) {

  const contents = JSON.parse(e.postData.contents);
  let index = SpreadsheetApp.getActiveSheet().getRange('D2').getDisplayValue();

  let chatId = contents.message.from.id;
  let text = contents.message.text;

  switch (index) {
    case '0': // this case get '/start'
      SpreadsheetApp.getActiveSheet().getRange('D2').setValue(1);
      sendText(chatId, 'Enter your number.');
      break;
    case '1': // this case get number
      SpreadsheetApp.getActiveSheet().getRange('A2').setValue(text);
      SpreadsheetApp.getActiveSheet().getRange('D2').setValue(2);
      sendText(chatId, 'Enter the base of your number.');
      break;
    case '2': // this case get base_from
      SpreadsheetApp.getActiveSheet().getRange('B2').setValue(text);
      SpreadsheetApp.getActiveSheet().getRange('D2').setValue(3);
      sendText(chatId, 'Enter the base you want to convert you number.');
      break;
    case '3': // this case get base_to
      SpreadsheetApp.getActiveSheet().getRange('C2').setValue(text);
      SpreadsheetApp.getActiveSheet().getRange('D2').setValue(0);
 
      let number = SpreadsheetApp.getActiveSheet().getRange('A2').getDisplayValue();
      let base_from = SpreadsheetApp.getActiveSheet().getRange('B2').getDisplayValue();
      let base_to = SpreadsheetApp.getActiveSheet().getRange('C2').getDisplayValue();
      let answer = conversion(number, base_to, base_from);
      sendText(chatId, `Your answer is ${answer}. ${number} in ${base_from} base is ${answer} in ${base_to} base.`);
      break;
    default:
      sendText(chatId, 'wtf');
  }
}
