$('#enter-vr').on('click',function(e){
	e.preventDefault();
	$('.container').remove();
	

	var v = document.getElementById('plano');
	v.play();
	var s = document.getElementById('soundtrack');
	// s.play();

	var v360 = document.getElementById('v-360');
	v360.play();
	v360.currentTime = 5;
	v360.pause();

	var el = document.getElementById('parque-lanin');
	el.addEventListener('click', function () {
		v360.play();
	});
	var el = document.getElementById('parque-pilcomayo');
	el.addEventListener('click', function () {
		v360.pause();
	});
	
})