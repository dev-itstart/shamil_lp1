$(function() {
	$('.header__navbar').click(function() {
		$(this).toggleClass('active');
		$('.header__block').slideToggle(300);
		return false;
	});

	$(document).mouseup(function (e){
		var div = $(".header__block, .header__navbar");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			$('.header__navbar').removeClass('active');
			$('.header__block').slideUp(300);
		}
	});
});