// function doPost(e) {

//   const contents = JSON.parse(e.postData.contents);

//   if (contents.hasOwnProperty('message')) {

//     let chatId = contents.message.from.id;
//     let text = contents.message.text;

//     SpreadsheetApp.getActiveSheet().getRange('A2').setValue(text);

//     if (text == '/start') sendText(chatId, 'Enter your number');
//     else sendText(chatId, `Your number is ${text}`, keyboard_text)
//   }

//   else {
//     const cbData = contents.callback_query.data;
//     const chatIdCb = contents.callback_query.from.id;

//     switch (cbData) {
//       case 'base_to':
//         doPost(e);
//         sendText(chatIdCb, 'Всего игр - ');
//         break;
//       case 'base_from':

//         sendText(chatIdCb, 'Выиграно - ');
//         break;
//       default:
//         sendText(chatIdCb, `🐒`);
//     }
//   }
// }