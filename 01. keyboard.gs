// let keyboard_text = {
//   "inline_keyboard": [
//     [{ text: 'base_from', callback_data: 'base_from' }, { text: 'number', callback_data: 'number' }, { text: 'base_to', callback_data: 'base_to' }]
//   ],
//   parse_mode: "HTML",
// }

// let keyboard_text = {
//   "force_reply": true,
//   "input_field_placeholder": "Ваш текст"
// };

let keyboard_text = {
  "inline_keyboard": [
    [{ text: 'base_from', callback_data: 'base_from' }],
    [{ text: 'base_to', callback_data: 'base_to' }]
  ],
  parse_mode: "HTML",
}