function showBox(id) {
	var activeElem = document.querySelector('.member-box.active');
	activeElem.classList.toggle('active');

	var newBox = document.querySelector('#member-box-' + id);
	newBox.classList.toggle('active');

	var activePic = document.querySelector('.members-row img.active');
	activePic.classList.toggle('active');

	var picElem = document.querySelector('#pic' + id);
	picElem.classList.toggle('active');
}