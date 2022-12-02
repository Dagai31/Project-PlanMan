function ValidateEmail(input) {

  var validLetters = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validLetters)) {

  return true;

  } else {

    alert("Invalid email address!");

    document.form1.text1.focus();

    return false;

  }

}