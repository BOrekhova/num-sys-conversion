function doPost(e) {

  const contents = JSON.parse(e.postData.contents);

  if (contents.message == '/start') {


    let chatId = contents.message.from.id;


    sendText(chatId, 'Welcome to Number System Conversion!');


    // sendText(chatId, 'Enter the base you want to convert the number.');
    // let base_to = contents.message;


    // sendText(chatId, 'Enter the base of the number you want to convert.');
    // let base_from = contents.message;


    // sendText(chatId, 'Enter the number.')
    // let number = contents.message;


    // sendText(chatId, conversion(number, base_to, base_from));


  }
}
