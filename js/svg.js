$(function() {


    var borderPath = document.querySelector('#z-border');
    $("#borlder-length").text(borderPath.getTotalLength()); 

    var circlePath = document.querySelector('#z-circle');
    $("#circle-length").text(circlePath.getTotalLength());

    var letterPath = document.querySelector('#z-letter');
    $("#letter-length").text(letterPath.getTotalLength());


    var element = document.getElementById("z-border");
    element.setAttribute("class", "z-border-showing");

	setTimeout(function() {
	  	element.setAttribute("class", "z-border-showing z-border-spin");
	}, 3000);


});