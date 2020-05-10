
function realizar_calculo(text){
	try{
	if(text.match(/%/g).length % 2==0){
		var start=text.indexOf("%")
		var end=text.indexOf("%",start+1)
		var f = text.slice(start+1,end);
		var r = eval(f).toString()
		text=text.replace(`%${f}%`,r)
	}}
	catch(err){
		return text
	}
	return ((text.match(/%/g)==null)||(text.match(/%/g).length % 2 == 1))?text:realizar_calculo(text);
}
  /*  Use local namespace */
  (function () {
//    var QUEUE = MathJax.Hub.queue;  // shorthand for the mathjax queue
    var pngImageShowing = false;    // whether we are currently displaying a png image instead of mathjax

    // Tell mathjax to render our equation at its leasure
    window.renderMath = function (TeX) {
    		console.log(TeX)
    		TeX=realizar_calculo(TeX)


//			TeX = "\\( " + TeX + " \\)";
			TeX = "\\[ " + TeX + " \\]";
//			TeX = "$$ " + TeX + " $$";

			document.getElementById('idMathOutput').innerHTML = TeX;
//			MathJax.Hub.Queue(["Typeset",MathJax.Hub,"idMathOutput"]);
			MathJax.texReset();
			MathJax.typesetClear();
			MathJax.typesetPromise([document.getElementById('idMathOutput')])
			pngImageShowing = false;
    }
    
    window.updateFormula = function() {

	
		if (document.getElementById('idMathInput').value != '')
		{
			document.getElementById('idMathInput').style.backgroundImage = 'none';
				renderMath(document.getElementById('idMathInput').value);
		}
		else 
		{
			document.getElementById('idMathInput').style.backgroundImage = null;  // return to the old background image
			renderMath("{}");
		}	
	}

    window.realtimeRenderClick = function(id) {
		if (id.checked == true) {
			document.getElementById('idRenderNowButton').disabled = true;
		} else {
			document.getElementById('idRenderNowButton').disabled = false;
		}
	}

    window.togglePNG = function() {

		if (pngImageShowing) {
			renderMath(document.getElementById('idMathInput').value);
		
			document.getElementById('idPNGSizeRadioButtons').style.visiblity = "hidden";
			document.getElementById('idPNGSizeRadioButtons').style.display = "none";
		} else 
		{
			showPNG();
			pngImageShowing = true;
			document.getElementById('idPNGSizeRadioButtons').style.visiblity = "visible";
			document.getElementById('idPNGSizeRadioButtons').style.display = "block";
		}

	}
	
	window.showPNG = function() {
		var eqSize = '\\normalsize';
		if (document.getElementById('idPNGSizeForm').elements['pngsize'][0].checked) eqSize = '\\small'
		if (document.getElementById('idPNGSizeForm').elements['pngsize'][2].checked) eqSize = '\\LARGE'
		if (document.getElementById('idPNGSizeForm').elements['pngsize'][3].checked) eqSize = '\\Huge'
		document.getElementById('idMathOutput').innerHTML =  "<div style='font-size: 9pt; padding-bottom: 6px;'>PNG image:</div><img src=\"/cgi-bin/mimetex?" + eqSize + " " + encodeURIComponent(myTrim(document.getElementById('idMathInput').value)) + "\">";
	}

	
	window.setEditorText = function (text) {
		document.getElementById('idMathInput').value = text.replace("\\n","\n");
		updateFormula();
	}
	
    window.showEquationURL = function() {
		document.getElementById('idURLTextArea').value = "http://"+window.location.hostname + "/?eqn=" + encodeURIComponent(myTrim(document.getElementById('idMathInput').value) );
		document.getElementById('idURLContainer').style.visibility = 'visible';
		document.getElementById('idURLContainer').style.display = 'block'
		document.getElementById('idShortURLButton').disabled = false;
		document.getElementById('idURLTextArea').select();
	}

    window.showShortURL = function() {
		document.getElementById('idShortURLButton').disabled = true;
		var longURL = myTrim(document.getElementById('idURLTextArea').value);
		longURL = encodeURIComponent(longURL);
		var shortURL = getHttpResponseText("http://"+window.location.hostname + '/getShortURL.php?longURL=' + longURL);
		document.getElementById('idURLTextArea').value = shortURL;
		document.getElementById('idURLTextArea').select();
	}


var menu = new Object();

window.toggleSubmenus = function(sourceId) {
  if(menu[sourceId] == 1) {
    closeMenuItem(sourceId);
  } else {
    openMenuItem(sourceId);
  }
}
window.openMenuItem = function(sourceId) {
  menu[sourceId] = 1;
  document.getElementById(sourceId+"_submenu").style.visibility = "visible";
  document.getElementById(sourceId+"_submenu").style.display = "block";
}
window.closeMenuItem = function(sourceId) {
  menu[sourceId] = 0;
  document.getElementById(sourceId+"_submenu").style.visibility = "hidden";
  document.getElementById(sourceId+"_submenu").style.display = "none";
}

window.myTrim = function(str) {
  str = str.replace(/^\s+/,"");
  str = str.replace(/\s+$/,"");
  return str;
}

window.getHttpResponseText = function(url) {
var pageRequest = false //variable to hold ajax object

if (!pageRequest && typeof XMLHttpRequest != 'undefined')
   pageRequest = new XMLHttpRequest()

if (pageRequest){ //if pageRequest is not false
   pageRequest.open('GET', url, false) //get page synchronously 
   pageRequest.send(null)
   }
   
  if (pageRequest.status==200) {
	  if (pageRequest.responseText!='') {
		return pageRequest.responseText;
      }
  } 
   
}    
    
  })();
