let button = document.querySelectorAll('button');
for(item of button){
    item.addEventListener('click', function hoverButton(){
        item.css.boxShadow='10px 20px 30px blue';
    })
}