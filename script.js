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
	
	/**************************SEARCH**************************/
	var search_wrap = document.getElementById("search-wrap");
	var search_bar = document.getElementById("search-bar");
	var search_visible = false;
	search_bar.value = "";
	search_wrap.style.display = 'none';
	"use strict";

	document.onkeyup = function (e){
		// if search-wrap is *not* visible
		if(search_visible == false){
			// if S
			if(e.keyCode == 83){
				search_visible = true;
				search_wrap.style.display = 'block';
				search_bar.focus();
			}

			/********************************************************************
			#   Here you can add shortcuts, i.e:
			#   // if T
			#   else if(e.keyCode == 84){
			#   	window.location = "https://lainchan.org/tech/catalog.html";
			#   }
			#
			#   Use this site to get more keyCodes: http://keycode.info/
			********************************************************************/

		}
		// if search-wrap is visible
		else{
			// if Esc
			if(e.keyCode == 27){
				search_visible = false;
				search_wrap.style.display = 'none';
			}
			// if Enter
			else if (e.keyCode == 13){
				var content = search_bar.value.replace(new RegExp(" ", 'g'), "+");
				var duckduckgo = ("https://duckduckgo.com/?q=" + content + "&ia=about");
				if(content != ""){
					window.location = duckduckgo;
				}
			}
		}
	}
}
