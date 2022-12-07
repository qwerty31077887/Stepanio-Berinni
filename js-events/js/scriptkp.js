
const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active');
        
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
}
document.addEventListener('keyup', function(event) {
    if(event.code === 'Escape') {
        menuBody.classList.remove('_active');
    }
});
const txtItem = document.querySelector('.textarea__item'); //само текстовое поле
const txtItemLimit = txtItem.getAttribute('maxlength'); // значение атрибута мл у этого текстового поля
const txtCounter = document.querySelector('.textarea__counter span'); // спан в ктороый мы будем выводить значение следующей строкой
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter); // выполняет подсчет введенных символов,когда клавиша отжата после нажатия
txtItem.addEventListener("keydown", function(event){ // для того чтобы подсчет шел, когда клавиша зажата (идет повтор одной и той же клавиши н раз)
    if(event.repeat) txtSetCounter();
});


function txtSetCounter() {
const txtCounterResult = txtItemLimit - txtItem.value.length;
txtCounter.innerHTML = txtCounterResult;
}