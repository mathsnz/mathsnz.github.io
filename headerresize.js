function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            minsize = 30,
			leftright = 10;
            header = document.getElementById("header"),
			size = 100 - distanceY;
        if (minsize > size) {
            $("#header").css( "height", minsize+"px" );
        } else {
            $("#header").css( "height", size+"px" );
        }
		if (distanceY > leftright) {
            $("#header img").css( "float", "left" );
            $("#nav").css( "text-align", "right" );
		} else {
            $("#header img").css( "float", "initial" );
            $("#nav").css( "text-align", "center" );
		}
    });
}
window.onload = init();