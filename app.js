function getPin(){
    const pin=Math.round(Math.random()*10000)
    const pinString=pin+'';
    if(pinString.length==4){
   
        return pin;
    }else{
       
        return getPin();
    }
}
function generatePin(){
  const pin=  getPin()
    document.getElementById('display-pin').value=pin
  
}


document.getElementById('key-pad').addEventListener('click',function(e){
const calcInput= document.getElementById('typed-numbers')
const number=  e.target.innerText
if(isNaN(number)){
 if(number=='C'){
     calcInput.value='';
 }
}else{

const previousNumber=calcInput.value;
const newNumbers=previousNumber+number
calcInput.value=newNumbers
}

})


//pin verify 
function verifyPin(){
    const pin=  document.getElementById('display-pin').value
    const typeNumbers=document.getElementById('typed-numbers').value
    const success=   document.getElementById('notify-success')
    const failed=   document.getElementById('notify-fail')
   
    if(pin==typeNumbers){
     
     success.style.display='block'
     failed.style.display='none'
    }else{
        
        failed.style.display='block'
        success.style.display='none'
    }

}