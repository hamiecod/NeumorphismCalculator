var buttons = document.getElementsByClassName('btn');

// for loop to set different CSS properties
for (let i = 0; i < buttons.length; i++){
    let idStorer =buttons[i].id;
    let trigger = document.getElementById(idStorer);
    trigger.style.transitionDuration='0.15s';
    trigger.style.transitionProperty='all';

    // adding css styling
    buttons[i].addEventListener('click', ()=>{
        if(trigger.style.backgroundColor != 'inset -8px -8px 16px rgba(255, 255, 255, 0.58), 8px 8px 16px rgba(0, 0, 0, 0.25)'){
            trigger.style.boxShadow='inset -8px -8px 16px rgba(255, 255, 255, 0.58), inset 8px 8px 16px rgba(0, 0, 0, 0.25)';
        }
        setTimeout(() => {
            trigger.style.boxShadow = '-8px -8px 16px rgba(255, 255, 255, 0.58), 8px 8px 16px rgba(0, 0, 0, 0.25)';
        }, 150);
    })

    buttons[i].addEventListener('click', ()=>{
        let idStorer =buttons[i].id;
        let trigger = document.getElementById(idStorer);
        let answerBox = document.getElementById('answerBox');
        let value = trigger.innerText;
        answerBox.innerText += value;

        if(document.getElementById(buttons[i].id).innerText = '×'){
            answerBox.innerText += '*';
        }
        else if(value == "AC"){
            answerKey.innerText = '';
        }
        else if(value == '='){
            value = "";
            answerBox.innerText = Math.eval(answerBox.innerText)
        }
    })
}

// let answerBox = document.getElementById('answerBox');
// if (answerBox.innerText)