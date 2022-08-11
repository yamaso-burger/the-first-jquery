// jQuery needs only '$' for 'document.querySelector'
$('h1').addClass("big-title margin-50");

// document.querySelectorAll("button") also changes...
$("button").text("Don't Click Me");

// manipulating attribute
$("a").attr("href", "https://yahoo.com");

//adding event listener
$("h1").click(function(){
    $("h1").css("color", "purple");
});

$("button").click(function(){
    $("h1").css("color", "red");
});

$("input").keypress(function(event){
    $("h1").text(event.key);
});

$("h1").mouseover(function(){
    $("h1").css("color", "black");
});

// animation with jQuery
$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});