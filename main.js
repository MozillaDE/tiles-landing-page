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

// Head 1
document.querySelector('#head1').addEventListener('click', function(event) {
	ga('send', 'event', 'link', 'click', 'story1');
});

// Head 2
document.querySelector('#head2').addEventListener('click', function(event) {
	ga('send', 'event', 'link', 'click', 'story2');
});

// Head 3
document.querySelector('#head3').addEventListener('click', function(event) {
	ga('send', 'event', 'link', 'click', 'story3');
});

// Head 4
document.querySelector('#head4').addEventListener('click', function(event) {
	ga('send', 'event', 'link', 'click', 'story4');
});

// Mitmachen Button
document.querySelector('#ctalink').addEventListener('click', function(event) {
	ga('send', 'event', 'link', 'click', 'ctabutton');
});

// Social media
document.querySelector('#twitterLink').addEventListener('click', function(event) {
	ga('send', 'event', 'link', 'click', 'twitterlink');
});
document.querySelector('#facebookLink').addEventListener('click', function(event) {
	ga('send', 'event', 'link', 'click', 'facebooklink');
});
