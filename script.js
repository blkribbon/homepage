window.onload=function(){
	var files = 5; 								// <---------- Change this value

	/**************************TEXT**************************/
	var a=new Date();
	var hour = a.getHours();
	var msj = ["おはよう", "こんにちは", "おやすみ"];
	var text = document.getElementById("text");

	if(hour >= 21 || hour <= 6){
		text.innerHTML=msj[2];
	}
	else if(hour <= 11){
		text.innerHTML=msj[0];
	}
	else{
		text.innerHTML=msj[1];
	}
	
	/**************************IMAGES**************************/
	var wrap = document.getElementById("wrap");
	wrap.style.backgroundImage = "url('img/mascot.jpg')";
	wrap.style.backgroundRepeat = "no-repeat";
	wrap.style.backgroundPosition = "right bottom";
	wrap.style.backgroundSize = "auto 650px";

}
