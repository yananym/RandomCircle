function generateCircles() {
	var html = '';
	var rgbColor;
	var stage = document.getElementById("stage");

	function random() {
	 return Math.floor(Math.random() * 256 ); 
	}

	function randomAxis() {
	 return Math.floor(Math.random() * 100 ); 
	}

	function randomSecond() {
	 return Math.floor(Math.random() * 1000 ); 
	}

	function randomColor() {
	  var color = 'rgb(';
	  color += random() + ',';
	  color += random() + ',';
	  color += random() + ')';
	  return color;
	}

	function randomSize() {
		var size = random();
		return size;
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
	  rgbColor = randomColor();
	  size = randomSize();
	  var margin = size / 2;
	  place = randomPlace();
	  var delay = randomSecond();
	  html += '<div id="circle'
		  + i + '" class="bounceInDown animated circle ms-font-s" style="'
		  + place + ' background-color:'
		  + rgbColor + '; width:'
		  + size + 'px; height:'
		  + size + 'px; margin-left:-'
		  + margin + 'px; animation-delay:'
		  + delay + 'ms;">Circle #'
		  + i + '</div>';
	}

	print(html);

	var elements = document.querySelectorAll(".circle");

	setTimeout(function() {
		for (var i = 0; i < elements.length; i++) {
			elements[i].classList.remove("bounceInDown");
		}
	}, 2000);

	document.body.addEventListener("click", function (event) {
	  if (event.target.classList.contains("circle")) {
	    event.target.classList.toggle("zoom");
	    event.target.classList.toggle("ms-fontSize-su");
	    document.querySelector(".main-col").classList.toggle("fade-out");
	  }
	});
}

document.getElementById("generate").onclick = generateCircles;