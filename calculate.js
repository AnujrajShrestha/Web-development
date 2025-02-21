
const button=document.querySelector('button');
const result=document.querySelector('.result');
const slider=document.querySelector('.slider');

function calculate(){
    const weight=document.querySelector("#weight").value;
    const height=document.querySelector("#height").value;

    if(!weight){
        alert("Please enter your weight");
        return;
    }else if(!height){
        alert("Please enter your age");
        return;
    }

    let bmi=parseFloat(weight)/Math.pow(parseFloat(height)/100,2);
    result.innerHTML=`<h2>${bmi.toFixed(2)}</h2>`;


    if(bmi>=16.0 && bmi<=18.7){
        slider.style.setProperty('--after-width','25%');
        slider.style.setProperty('--color','skyblue');
    }else if(bmi>=18.8 && bmi<=24.0){
        slider.style.setProperty('--after-width','50%');
        slider.style.setProperty('--color','green');
    }
    else{
        slider.style.setProperty('--after-width','100%');
        slider.style.setProperty('--color','red');
    }
}

button.addEventListener('click',calculate);