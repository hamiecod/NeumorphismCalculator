
var buttons = document.getElementsByClassName('btn');

// for loop to set different CSS properties
for (let i = 0; i < buttons.length; i++){
    let idStorer =buttons[i].id;
    let trigger = document.getElementById(idStorer);
    trigger.style.transitionDuration='0.15s';
    trigger.style.transitionProperty='all';

    // setting the css properties
    buttons[i].addEventListener('click', function hoverButton(){
        if(trigger.style.backgroundColor != 'inset -8px -8px 16px rgba(255, 255, 255, 0.58), 8px 8px 16px rgba(0, 0, 0, 0.25)'){
            trigger.style.boxShadow='inset -8px -8px 16px rgba(255, 255, 255, 0.58), inset 8px 8px 16px rgba(0, 0, 0, 0.25)';
        }
        setTimeout(() => {
            trigger.style.boxShadow = '-8px -8px 16px rgba(255, 255, 255, 0.58), 8px 8px 16px rgba(0, 0, 0, 0.25)';
        }, 150);

        let value = buttons[i].innerText;
        console.log(value);
    })

    // building the logic of the program
    // buttons[i].addEventListener('click')
}

