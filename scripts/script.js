function generateCircles() {
	var html = '';
	var rgbColor;
	var stage = document.getElementById("stage");
	var names = ["Acamar", "Alastria (star system)", "Aldebaran", "Alpha Centauri", "Alpha Leonis system", "Alpha Omicron system", "Alpha Onias system", "Altair system", "Alvacorn Major", "Amleth system", "Andorian system", "Arakon system", "Arcadian system", "Argaya system", "Argos system", "Atalia system", "Avery system", "Bajoran system", "Barradas system", "Benthan system", "Benzite system", "Berengarius system", "Bersallis system", "Beta Agni system", "Beta Aurigae", "Beta Cassius system", "Beta Cygni", "Beta Epsilon system", "Beta Geminorum system", "Beta Lyrae system", "Beta Magellan system", "Beta Mahoga system", "Beta Niobe", "Beta Penthe system", "Beta Portolan system", "Beta Renna system", "Beta Renner system", "Beta Stromgren system", "Bilaren system", "Bopak system", "Boradis system", "Braslota system", "Breen system", "Bringloid system", "C-111 system", "Calder system", "Calindra system", "Callinon system", "Cambra system", "Camor system", "Cardassian system", "Carraya system", "Cerberus system", "Ceti Alpha system", "Chin'toka system", "Clarius system", "Clarus", "Cleon system", "Clevari system", "Cordannas system", "Coridan system", "Cornelian system", "Cruces system", "Cuellar system", "D'Arsay system", "D cont.", "Darla system", "Delos system", "Delphi Ardu system", "Delta Rana system", "Deneb system", "Denobula Triaxa system", "Detrian system", "Devidia system", "Devolin system", "Devron system", "Diomedian system", "Dopa system", "Dorala system", "Dozaria system", "Draken system", "Dramen system", "Draygo system", "Dreon system", "Echevarria system", "El-Adrel system", "El-Aurian system", "Endicor system", "Epsilon Canaris", "Epsilon Indi", "Epsilon Mynos system", "Epsilon Nel system", "Epsilon Silar system", "Fabrina solar system", "Fima system", "Fowla system", "Gamelan system", "Gamma 400 system", "Gamma 7A system", "Gamma Argus system", "Gamma Arigulon system", "Gamma Hydra", "Gamma system", "Garadius system", "Garo VII system", "Garth system", "Gavara system", "Gema system", "Goralis system", "Goren system", "Grenna system", "Groombridge 34", "Guernica system", "Gyrannan system", "Halee system", "Hanoli system", "Hanon system", "Hatarian system", "Hayashi system", "Hemikek system", "Idran system", "Ilecom system", "Ilidaria system", "Indri system", "Iota Geminorum system", "Irtok", "Izar", "Kabrel system", "Kalandra system", "Kalla system", "Kar-telos system", "Karemma system", "Kataan star system", "K cont.", "Kazis binary system", "Kelrabi system", "Kelvas system", "Kendi system", "Kendren system", "Khitomer system", "Kohlan system", "Kolarin system", "Koralis system", "Korat system", "Kotanka system", "Kriosian system", "Kurlan system", "Kylata system", "L", "L-370", "L-374", "Lapolis system", "Laurentian system", "Legaran system", "Ligos system", "Lima Sierra system", "Loracus system", "Loren system", "Loval system", "Luyten 789-6", "Lyshan system", "Lysian system", "M", "M24 Alpha system", "Malurian system", "Maxia Zeta system", "Mempa system", "Mericor system", "Minarian star system", "Minos Korva", "Mira Antlia system", "Moab system", "Modean system", "Moriya system", "Moselina system", "MS system", "Mutara system", "N", "Natori system", "Nel Bato system", "Nelvana system", "Nequencia Alpha system", "Nyrian system", "O", "Oby system", "Ohniaka system", "Olmerak system", "Omega Sagitta system", "Omega system", "Omicron system", "Omicron Theta system", "Opperline system", "Orelious system", "Orellius system", "Orias system", "Ovion system", "P", "Pallas 14 system", "Parada system", "Pegos Minor system", "Peliar system", "Pelosa system", "Pendari system", "Pentarus system", "Pentath system"];

	function randomHue() {
	 return Math.floor(Math.random() * 256 ); 
	}

	function randomName() {
	 return Math.floor(Math.random() * names.length ); 
	}

	function randomAxis() {
	 return Math.floor(Math.random() * 100 ); 
	}

	function randomSecond() {
	 return Math.floor(Math.random() * 1000 ); 
	}

	function randomColor() {
	  var r = randomHue();
	  var g = randomHue();
	  var b = randomHue();
	  
	  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1,7);
	}

	function randomSize() {
		return Math.floor(Math.random() * 256 );
	}

	function randomPlace() {
		var x = randomAxis();
		var y = randomAxis();
		var place = 'left:' + x + '%; top:' + y +'%;'; 
		return place;
	}

	function print(message) {
	  stage.innerHTML = message;
	}

	for (var i = 0; i < 100; i += 1) {
	  color = randomColor();
	  size = randomSize();
	  var margin = size / 2;
	  place = randomPlace();
	  var delay = randomSecond();
	  var name = randomName();
	  html += '<div id="circle'
		  + i + '" class="bounceInDown animated circle ms-font-s" style="'
		  + place + ' background-color:'
		  + color + '; width:'
		  + size + 'px; height:'
		  + size + 'px; margin-left:-'
		  + margin + 'px; animation-delay:'
		  + delay + 'ms;"><span class="name">'
		  + names[name] + '</span><span class="removeCircle ms-fontWeight-semilight ms-u-fadeIn100" title="Delete Planet"><i class="ms-Icon ms-Icon--x"></i></span></div>';
	}

	print(html);

	var elements = document.querySelectorAll(".circle");

	setTimeout(function() {
		for (var i = 0; i < elements.length; i++) {
			elements[i].classList.remove("bounceInDown");
		}
	}, 2000);

	document.body.addEventListener("click", function (event) {
	  if (event.target.classList.contains("circle") && !event.target.classList.contains("nonRandom")) {
	    event.target.classList.toggle("zoom");
	    event.target.classList.toggle("ms-fontSize-su");
	    document.querySelector(".main-col").classList.toggle("fade-out");
	  } else if (event.target.classList.contains("fade-out")) {
	    document.querySelector(".zoom").classList.remove("ms-fontSize-su");
	    document.querySelector(".zoom").classList.remove("zoom");
	    document.querySelector(".main-col").classList.remove("fade-out");
	  }
	});
}

function resizeCircles() {
	var valueSize = document.getElementById("circleSize");
	valueSize.max = "360";
	var displaySize = document.getElementById("circleSizeTitle").lastChild;
	displaySize.innerHTML = valueSize.value + " deg";

	valueSize.addEventListener("change", function (event) {
	var elements = document.querySelectorAll(".circle");
		for (var i = 0; i < elements.length; i++) {
			var el = document.getElementById("circle" + i);
			el.style.transform = "rotate(" + valueSize.value + "deg)";
			displaySize.innerHTML = valueSize.value + " deg";
		}
	});
}

function toggleRandom() {
	var toggle = document.getElementById("toggleRandom");

	toggle.addEventListener('change', function (event) {

		var elements = document.querySelectorAll(".circle");
		if(toggle.checked){
	      for (var i = 0; i < elements.length; i++) {
				elements[i].classList.remove("nonRandom");
			}
	    }
	    else {
		      for (var i = 0; i < elements.length; i++) {
		      	elements[i].classList.remove("zoom");
		      	document.querySelector(".main-col").classList.remove("fade-out");
				elements[i].classList.add("nonRandom");
			}
	    }
	});
}

function removePlanet() {
	var planetsGone = [];
	document.body.addEventListener("click", function (event) {
	  if (event.target.classList.contains("removeCircle")) {
	    var html = "";
	    var name = event.target.previousSibling.innerHTML;
	    var planet = event.target.parentNode;
	    planetsGone.push(name);
	    for (var i = 0; i < planetsGone.length; i++) {
	    	var delay = i * 100;
		    html += '<li class="fadeInDown animated" style="animation-delay:' + delay + 'ms">' + planetsGone[i] + '</li>';
	    } 
	    console.log(planetsGone.length);
	    document.getElementById("planetList").innerHTML = html;
	    planet.classList.add("removed");
	    planet.style.display = "none";
	    document.querySelector(".main-col").classList.remove("fade-out");
	  }
	});
}

document.addEventListener("DOMContentLoaded", function(event) { 
    resizeCircles();
    toggleRandom();
    removePlanet();
    document.getElementById("generate").onclick = generateCircles;
});
