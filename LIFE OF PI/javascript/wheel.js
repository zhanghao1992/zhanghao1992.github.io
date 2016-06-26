function wheel(obj,fnUp,fnDown) {
	if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
		obj.addEventListener('DOMMouseScroll',fnEv,false);	
	} else {
		obj.addEventListener('mousewheel',fnEv,false);
	}
	function fnEv(ev){
		var down = true;
		if (ev.wheelDelta) {
			down = ev.wheelDelta > 0 ? true : false;
		} else {
			down = ev.detail > 0 ? false : true;
		}
		if (down) {
			typeof(fnUp) == 'function' && fnUp();
		} else {
			typeof(fnDown) == 'function' && fnDown();
		}
		ev.preventDefault();
	};
};