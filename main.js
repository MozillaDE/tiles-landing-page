function showBox(id) {
	var activeElem = document.querySelector('.member-box.active');
	activeElem.classList.toggle('active');

	var newBox = document.querySelector('#member-box-' + id);
	newBox.classList.toggle('active');
}