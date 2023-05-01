var icon = document.getElementById('mode-change');

icon.onclick = function name(params) {
	document.body.classList.toggle('dark-theme');
	if(icon.className=='bx bx-moon'){
		icon.className='bx bx-sun';
	}else{
		icon.className='bx bx-moon'
	}
}