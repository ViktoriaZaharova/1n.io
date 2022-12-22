$('[name="phone"]').mask('+7 (999) 999-99-99');

// scroll top
$("body").on("click", ".btn-scroll-top", function (e) {
	e.preventDefault();
	$("html, body").animate({
		scrollTop: 0
	}, "slow");
});

// scroll link anchor
$('.go_to').click(function (e) {
	e.preventDefault();
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length !== 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);

		$('.mobile-menu').fadeOut();
	}
	return false;
});

// mobile menu
$('.btn-burger').on('click', function (e) {
	e.preventDefault();
	$('.mobile-menu').fadeIn();
});

$('.mobile-menu__close').on('click', function (e) {
	e.preventDefault();
	$('.mobile-menu').fadeOut();
});

// password view
$('.btn-view-password').on('click', function () {
	if ($(this).siblings('.input-password').attr('type') === 'password') {
		$(this).addClass('view');
		$(this).siblings('.input-password').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$(this).siblings('.input-password').attr('type', 'password');
	}
	return false;
});

function checkParams() {
	var fio = $('[name="web_site"]').val();
	var name = $('[name="name"]').val();
	var email = $('[name="mail"]').val();
	var phone = $('[name="phone"]').val();

	if (fio.length != 0 && email.length != 0 && phone.length != 0 && name.length != 0) {
		$('.btn-submit').removeAttr('disabled');
	} else {
		$('.btn-submit').attr('disabled', 'disabled');
	}
}