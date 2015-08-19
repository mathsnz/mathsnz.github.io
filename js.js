function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            minsize = 30,
			leftright = 40;
            header = document.getElementById("header"),
			size = 100 - distanceY,
			imgheight = 70 - distanceY,
			maxheight = 70 - leftright;
        if (minsize > size) {
            $("#header").css( "height", minsize+"px" );
        } else {
            $("#header").css( "height", size+"px" );
        }
		if (distanceY > leftright) {
            $("#header img").css( "float", "left" );
            $("#nav").css( "text-align", "right" );
            $("#header img").css( "max-height", maxheight+"px" );
		} else {
            $("#header img").css( "float", "initial" );
            $("#nav").css( "text-align", "center" );
            $("#header img").css( "max-height", imgheight+"px" );
		}
    });
}
window.onload = init();
$(document).ready(function() {
	$(window).resize(function(){ $('#nav2').css("display", "none");}); 
 });