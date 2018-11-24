let chooseBtn = document.getElementById('choose'),
		receiveBtn = document.getElementById('receive'),
		heading = document.getElementsByTagName('h2')[0],
		nameInput = document.getElementsByClassName('contactform_name')[0],
		phoneInput = document.querySelector('.contactform_phone'),
		mailInput = document.querySelectorAll('contactform_mail')[0],
		close = document.querySelector('.close'),
		text = document.getElementsByName("message")[0],
		modal = document.querySelector('.modal');
function hover() {
	heading.textContent = "Действительно всё!";
};

function out() {
	heading.textContent = "Всё включено!"
}

heading.addEventListener("mouseenter", hover);
heading.addEventListener("mouseleave", out);

close.addEventListener("click", function(){
modal.style.display = "none"
});
receiveBtn.addEventListener("click", function(){
	modal.style.display = 'block'
});
nameInput.addEventListener("input", function(){
	text.value = "Меня зовут " + nameInput.value + ". И я хочу спросить: ";
	if (nameInput.value == "") {
		text.value = "";
	}
});