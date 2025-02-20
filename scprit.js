const input=document.querySelector("input");
const label=document.querySelector("label");

input.addEventListener('click',() =>{
    label.style.transform="translateY(0px)"
})

const keys="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()`~_+-={}[]\|;:'<>?,./"

const button=document.querySelector("button");
const result=document.querySelector('.result');

function analyse(){
    const password=input.value;
    if(!password){
        alert("Please enter your password")
        return;
    }

    for(i=0;i<password.length;i++){
        if(password[i]==='"'){
            alert("Please don't enter double quatation")
            return;
        }
    }

    let ans=Array(password.length).fill("_");
    let attemps=0;
    let index=0;

    const interval=setInterval(()=>{
        if(index>=password.length){
            clearInterval(interval);
            result.innerHTML=`<h2>Your password is:${ans.join('')} (Cracked is ${attemps} attemps)</h2>`;
            return;
        }
        for(let i=0;i<keys.length;i++){
            attemps++;
            if(password[index]===keys[i]){
                ans[index]=keys[i];
                index++;
                break;
            }
        }
        result.innerHTML=`<h2></h2>Analying your password:${ans.join('')} (Attemps: ${attemps})</h2>`
    },50);
}

button.addEventListener('click',analyse);