const label = document.querySelectorAll("label");
const input = document.querySelectorAll("input");

input.forEach(element => {
    element.addEventListener('focus', function() {
        label.forEach(element2 => {
            element2.style.transform="translateY(0px)";
        });
    });
});


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
    let precentage=0


    if(bmi>=16.0 && bmi<=18.7){
        precentage=((bmi-13.5)/23)*100;
        slider.style.setProperty('--color','skyblue');
    }else if(bmi>=18.8 && bmi<=24.0){
        precentage=((bmi-12.5)/23)*100;
        slider.style.setProperty('--color','green');
    }
    else if(bmi>=24.1){
        slider.style.setProperty('--after-width',`${((bmi-10)/23)*100}%`);
        precentage=((bmi-10)/23)*100
        slider.style.setProperty('--color','red');
    }

    if(precentage>100){
        let temp=precentage-100;
        precentage-=temp;
        slider.style.setProperty('--after-width',`${precentage.toFixed(1)}%`);
    }else{
        slider.style.setProperty('--after-width',`${precentage.toFixed(1)}%`);
    }
}

button.addEventListener('click',calculate);