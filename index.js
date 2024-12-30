document.getElementById('textInput').val=10;


function updateTextInput(val){
    document.getElementById('textInput').value=val;
    generateNewPassword();
}
function updateRangeInput(val){
    document.getElementById('rangeInput').value=val;
    generateNewPassword();
}
function generateNewPassword(){
    const length=parseInt(document.getElementById('textInput').value);
    const useUppercase = document.getElementById('upperCase').checked;
    const useLowercase = document.getElementById('lowerCase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;


const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

let allChars = '';
  if (useUppercase) allChars += uppercaseChars;
  if (useLowercase) allChars += lowercaseChars;
  if (useNumbers) allChars += numberChars;
  if (useSymbols) allChars += symbolChars;


  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  document.getElementById('genereatedpassword').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('genereatedpassword');
    navigator.clipboard.writeText(passwordField.value);
    alert('Password copied to clipboard!');
  }
  
  