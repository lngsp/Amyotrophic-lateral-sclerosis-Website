function getLanguage() {
    let language = window.navigator.language;
    document.getElementById("language").innerHTML = "Browser language: " + language;
}

function getTime() {
    const date = new Date();
    document.getElementById("DateTime").innerHTML = "Current date and time: " + date.toLocaleDateString() + ", " + date.toLocaleTimeString() ;
}

function myLocation() {
    let origin = window.location;
    document.getElementById("Location").innerHTML = "Location is: " + origin;
}

function myNavigatorName() {
    let browser = navigator.appName;
    document.getElementById("NavigatorName").innerHTML = "Browser Name: " + browser;
}

function myNavigatorVersion() {
    let version =  navigator.appVersion;
    document.getElementById("NavigatorVersion").innerHTML = "Browser version:<br>" + version;
}

function schimbaContinut(resursa, jsFisier, jsFunctie){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	   document.getElementById("continut").innerHTML = this.responseText;
	   
		if (jsFisier) {
		  var elementScript = document.createElement('script');
		  elementScript.onload = function () {
			//console.log("hello");
			if (jsFunctie) {
			  window[jsFunctie]();
			}
		  };
		  elementScript.src = jsFisier;
		  document.head.appendChild(elementScript);
		} else {
		  // console.log(functie)
		  if (jsFunctie) {
			window[jsFunctie]();
		  }
		}
  
	  }
	};
	console.log(resursa)
	xhttp.open("GET", resursa+".html", true);
	
	xhttp.send();
  }


  function incarcaPersoane(resursa, jsFisier, jsFunctie){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	   document.getElementById("continut").innerHTML = this.responseText;
	   
		if (jsFisier) {
		  var elementScript = document.createElement('persoane');
		  elementScript.onload = function () {
			//console.log("hello");
			if (jsFunctie) {
			  window[jsFunctie]();
			}
		  };
		  elementScript.src = jsFisier;
		  document.head.appendChild(elementScript);
		} else {
		  // console.log(functie)
		  if (jsFunctie) {
			window[jsFunctie]();
		  }
		}
  
	  }
	};
	console.log(resursa)
	xhttp.open("GET", resursa+".html", true);
	
	xhttp.send();
  }

//CANVAS
// culori folosite de color pickere
var culoareContur = "#000000";
var culoareUmplere = "#000000";

function clickPeCanvas(e) {
	console.log("Am dat clik pe canvas");

	const canvas = document.querySelector('#myCanvas');
	// could be 3d, if you want to make a video game
	const ctx = canvas.getContext('2d');
	ctx.strokeStyle = culoareContur;
  
	let isDrawing = false;
	let lastX = 0;
	let lastY = 0;
  
	function draw(e) {
	  // stop the function if they are not mouse down
	  if(!isDrawing) return;
	  //listen for mouse move event
	  //console.log(e);
	  ctx.beginPath();
	  ctx.moveTo(lastX, lastY);
	  ctx.lineTo(e.offsetX, e.offsetY);
	  ctx.stroke();
	  [lastX, lastY] = [e.offsetX, e.offsetY];
	}
  
	canvas.addEventListener('mousedown', (e) => {
	  isDrawing = true;
	  [lastX, lastY] = [e.offsetX, e.offsetY];
	});
	canvas.addEventListener('mousemove', draw);
	canvas.addEventListener('mouseup', () => isDrawing = false);
	canvas.addEventListener('mouseout', () => isDrawing = false);

}

function seteazaCuloareContur(culoare) {
	culoareContur = culoare;
	console.log("Am dat clik pe seteazaCuloareContur");
}

function seteazaCuloareUmplere(culoare) {
	culoareUmplere = culoare;
	console.log("Am dat clik pe seteazaCuloareUmplere");
}


//Tabel dinammic

function addRow(tableID) {

	var table = document.getElementById(tableID);

	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);

	var colCount = table.rows[0].cells.length;

	for(var i=0; i<colCount; i++) {

		var newcell	= row.insertCell(i);

		newcell.innerHTML = table.rows[0].cells[i].innerHTML;
		//alert(newcell.childNodes);
		switch(newcell.childNodes[0].type) {
			case "text":
					newcell.childNodes[0].value = "";
					break;
			case "checkbox":
					newcell.childNodes[0].checked = false;
					break;
			case "select-one":
					newcell.childNodes[0].selectedIndex = 0;
					break;
		}
	}
}

function deleteRow(tableID) {
	try {
	var table = document.getElementById(tableID);
	var rowCount = table.rows.length;

	for(var i=0; i<rowCount; i++) {
		var row = table.rows[i];
		var chkbox = row.cells[0].childNodes[0];
		if(null != chkbox && true == chkbox.checked) {
			if(rowCount <= 1) {
				alert("Cannot delete all the rows.");
				break;
			}
			table.deleteRow(i);
			rowCount--;
			i--;
		}


	}
	}catch(e) {
		alert(e);
	}
}