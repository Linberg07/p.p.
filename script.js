$(document).ready(function(){
var acord_item = $('.accordion__item');
var acord_ul = $('.accordion__item_ul');
var acord_icon = $('.dcjq-parent');
acord_icon.removeClass('active');
acord_ul.css('display','none');

acord_item.click(function(){
	var w = $(window).width();
	$('.graphite .accordion a').css('color','#ddd');
	if(w<768){
	if(acord_icon.hasClass('active')){
		$('.graphite .accordion a:hover').css('color','#fff');
	}else{
		$('.graphite .accordion a:hover').css('color','#ddd');
	}
	}
	
	
		
	acord_ul.css('display','none');
	var OffsetTop = $(this).offset().top;

	setTimeout(function(){ 
		
		window.scrollTo(OffsetTop,OffsetTop);
		
		},200);
	 


})
console.log('1');

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

});