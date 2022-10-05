const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const inputElements = document.querySelectorAll('input[type="checkbox"]');
const copyPassword = document.querySelector('.copyPassword');

let alphbet = 'abcdefghijklmnopqrstuvwxyz';
let integer = '0123456789';
let symbol = '!@#$%^&*()_+[{}]-|?/';


// password all value
let password = " ";




const getrandomAlaphabet = () =>{
let random =  Math.floor((Math.random() * alphbet.length));
if(lowercaseEl.checked){
    password+=alphbet[random];
}

}

const getrandomAlaphabetUpperCase = () =>{
let random =  Math.floor((Math.random() * alphbet.length));
if(uppercaseEl.checked){
    password+= alphbet[random].toUpperCase();
}
   


}


const getrandomInteger = () =>{
let random =  Math.floor((Math.random() * integer.length));

if(numbersEl.checked){
    password+= integer[random];
}

}


const getrandomSymbol = () =>{
let random =  Math.floor((Math.random() * symbol.length));
if(symbolsEl.checked){
    password+= symbol[random];
}

}

// password all value

const randomFunc = {
   numbers : getrandomInteger,
   lowercase:getrandomAlaphabet,
   sybmols:getrandomSymbol,
   uppercase:getrandomAlaphabetUpperCase,
  
   
}







const value = Object.values(randomFunc)
const realPassword = []

const randomMethod = () =>{
    let random = Math.floor(Math.random() * value.length)
   
   value[random]();

  
}
clipboardEl.addEventListener("click",()=>{

   navigator.clipboard.writeText(resultEl.innerText);
   copyPassword.innerText =`Password Copied :  ${resultEl.innerText}}`

})

generateEl.addEventListener("click",()=>{
   
   while(password.length <= lengthEl.value){
    randomMethod()
   }


    resultEl.innerText = password;
   
    password = " ";
    copyPassword.innerText =" "
})

