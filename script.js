const menu_icon = document.getElementById("icon");
const nav = document.getElementById("nav");

menu_icon.addEventListener('click', (e) => {
	e.preventDefault();

	if(nav.style.display == 'none'){
		nav.style.display = 'block';
		menu_icon.style.transform = 'scale(1.2)';
	}else{
		nav.style.display = 'none';
		menu_icon.style.transform = 'scale(1)';
	}
});

const bmw = document.getElementById("bmw");
const merc = document.getElementById("mercedes");
const hyundai = document.getElementById("hyundai");
const toyota = document.getElementById("toyota");
const vw = document.getElementById("vw");

bmw.addEventListener('click' , function(){
    window.location.href = "cars.html#bmw";
});

hyundai.addEventListener('click' , function(){
    window.location.href = "cars.html#hyundai";
});

merc.addEventListener('click' , function(){
    window.location.href = "cars.html#mercedes";
});

toyota.addEventListener('click' , function(){
    window.location.href = "cars.html#toyota";
});

vw.addEventListener('click' , function(){
    window.location.href = "cars.html#vw";
});