function conversion(number, base_to, base_from) {

  if (base_to == 10) return parseInt(number, base_from);

  else if (base_from == 10) return number.toString(base_to);
  
  else return parseInt(number, base_from).toString(base_to);
  
}

