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