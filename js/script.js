$(document).ready(function(){

	$('.main__epigraph').mouseenter(function() {
		$(this).addClass('epigraph_tooltip');
	});
	$('.main__epigraph').mouseleave(function() {
		$(this).removeClass('epigraph_tooltip');
	});

	$('.header__burger').on('click', function(){
		$('.header__burger, .header__menu, .burger__body').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.table-of-contents__item').on('click', function(){
		$('.table-of-contents__item').removeClass('table-of-contents__item_current');
		$(this).addClass('table-of-contents__item_current');
	});

	$('a[href*="#"]').smoothscroll({
		duration:  200
		});

	$('.table-of-contents span').on('click', function() {
		$('.table-of-contents__body').toggleClass('table-of-contents__body_visible');
	});
	$('.table-of-contents__item').on('click', function() {
		$('.table-of-contents__body').removeClass('table-of-contents__body_visible');
	});

});

$(window).scroll(function(){

	var year2021point = $('#year2021').offset().top;
	var year2020point = $('#year2020').offset().top;
	var year2019point = $('#year2019').offset().top;
	var year2018point = $('#year2018').offset().top;
	var year2017point = $('#year2017').offset().top;

	if ($(window).scrollTop() >= year2021point) {
		$('.table-of-contents__item').removeClass('table-of-contents__item_current');
		$('#toc-year2021').addClass('table-of-contents__item_current');
	};

	if ($(window).scrollTop() >= year2020point) {
		$('.table-of-contents__item').removeClass('table-of-contents__item_current');
		$('#toc-year2020').addClass('table-of-contents__item_current');
	};

	if ($(window).scrollTop() >= year2019point) {
		$('.table-of-contents__item').removeClass('table-of-contents__item_current');
		$('#toc-year2019').addClass('table-of-contents__item_current');
	};

	if ($(window).scrollTop() >= year2018point) {
		$('.table-of-contents__item').removeClass('table-of-contents__item_current');
		$('#toc-year2018').addClass('table-of-contents__item_current');
	};

	if ($(window).scrollTop() >= year2017point) {
		$('.table-of-contents__item').removeClass('table-of-contents__item_current');
		$('#toc-year2017').addClass('table-of-contents__item_current');
	};

});