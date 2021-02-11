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

        let mySound = new Audio("../music/click1.mp3");
        mySound.volume = 0.2;
        mySound.play;
    })

    let screen = document.getElementById('answerBox');
    let screenValue = '';
    buttons[i].addEventListener('click', (e)=>{
        let buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        if(buttonText == '×'){
            buttonText = '*';
            screenValue = screen.innerText += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == '÷'){
            buttonText = '/';
            screenValue = screen.innerText += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC'){
            screen.innerText = '';
            screen.innerText = screenValue;
        }
        else if (buttonText == '='){
            screenValue = eval(screen.innerText);
            screen.innerText = screenValue;
        }
        else if (buttonText == '√'){
            screenValue = Math.sqrt(screen.innerText);
            screen.innerText = screenValue;
        }
        else if (buttonText == '') /* triggering the backspace button */{
            buttonText = '';
            // above line is written so that the answer field is not affected when the backspace button is pressed
            let len = screen.innerText.length;
            let back = screen.innerText.substring(0, len-1);
            screenValue = screen.innerText = back;
            screen.value = screenValue;
        }
        else{
            screen.innerText += buttonText;
        }
        
    })
}