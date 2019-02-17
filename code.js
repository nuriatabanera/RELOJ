//document.ready

$(function(){
	
	function bucle(){
		let tiempo = new Date();
		let hora = (tiempo.getHours() < 10 ? '0'+tiempo.getHours() : tiempo.getHours());
		let minuto = (tiempo.getMinutes() < 10 ? '0'+tiempo.getMinutes() : tiempo.getMinutes());
		let segundo = (tiempo.getSeconds() < 10 ? '0'+tiempo.getSeconds() : tiempo.getSeconds());
		
		$("#reloj").html(`${hora}:${minuto}:${segundo}`);
		
		setTimeout(function(){ bucle(); },1000);
	}
	bucle();


});
