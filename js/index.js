$(function(){
if($('.nav>ul>li').hasClass('selected')){
$('.selected').addClass('active');
var currentleft=$('.selected').position().left+"px";
var currentwidth=$('.selected').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
}
else{
  $('.nav>ul>li').first().addClass('active');
  var currentleft=$('.active').position().left+"px";
var currentwidth=$('.active').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
}
$('.nav>ul>li').hover(function(){
  $('.nav ul li').removeClass('active');
  $(this).addClass('active');
var currentleft=$('.active').position().left+"px";
var currentwidth=$('.active').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
},function(){
if($('.nav>ul>li').hasClass('selected')){
$('.selected').addClass('active');
var currentleft=$('.selected').position().left+"px";
var currentwidth=$('.selected').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
}
else{
  $('.nav>ul>li').first().addClass('active');
  var currentleft=$('.active').position().left+"px";
var currentwidth=$('.active').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
}
});
});



















$(document).ready(function() {
  

	  
    var numItems = $('li.fancyTab').length;
		
	
			  if (numItems == 12){
					$("li.fancyTab").width('8.3%');
				}
			  if (numItems == 11){
					$("li.fancyTab").width('9%');
				}
			  if (numItems == 10){
					$("li.fancyTab").width('10%');
				}
			  if (numItems == 9){
					$("li.fancyTab").width('11.1%');
				}
			  if (numItems == 8){
					$("li.fancyTab").width('12.5%');
				}
			  if (numItems == 7){
					$("li.fancyTab").width('14.2%');
				}
			  if (numItems == 6){
					$("li.fancyTab").width('16.666666666666667%');
				}
			  if (numItems == 5){
					$("li.fancyTab").width('20%');
				}
			  if (numItems == 4){
					$("li.fancyTab").width('25%');
				}
			  if (numItems == 3){
					$("li.fancyTab").width('33.3%');
				}
			  if (numItems == 2){
					$("li.fancyTab").width('50%');
				}
		  
	 

	
		});

























//Увеличение
$(document).ready(function() { // Ждём загрузки страницы
	
	$(".image").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src="+src+" class='popup_img' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup").fadeIn(500); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(100);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку высплывающего окна
			}, 800);
		});
	;});
	
});



