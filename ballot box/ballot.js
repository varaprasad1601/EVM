

function power_btn(){
	var box=document.getElementById('check_box');
	if (box.checked==true){
		document.getElementById('v_div1').style.visibility="hidden";
		document.getElementById('v_div2').style.visibility="hidden";
		document.getElementById('cir').style.background="red";
		clear();
	}else{
		congmark=0;
		bjpmark=0;
		tdpmark=0;
		fanmark=0;
		lokmark=0;
		cpmmark=0;
		trsmark=0;
		prpmark=0;
		document.getElementById('v_div1').style.visibility="visible";
		document.getElementById('v_div2').style.visibility="visible";
		document.getElementById('cir').style.background="green";
	}
	
}


var cong=0;
var bjp=0;
var tdp=0;
var fan=0;
var lok=0;
var cpm=0;
var trs=0;
var prp=0;


var congmark=0;
var bjpmark=0;
var tdpmark=0;
var fanmark=0;
var lokmark=0;
var cpmmark=0;
var trsmark=0;
var prpmark=0;



function btn(value){
	if (value==1){
		document.getElementById("id"+1).style.background="green"
		document.getElementById("id"+2).style.background="#293148"
		document.getElementById("id"+3).style.background="#293148"
		document.getElementById("id"+4).style.background="#293148"
		document.getElementById("id"+5).style.background="#293148"
		document.getElementById("id"+6).style.background="#293148"
		document.getElementById("id"+7).style.background="#293148"
		document.getElementById("id"+8).style.background="#293148"
		document.getElementById('logo').innerHTML="<img src='"+value+".png' width='80%'>"
		document.getElementById('logo').style.visibility="visible"
		congmark=1, bjpmark=0, tdpmark=0, fanmark=0, lokmark=0, cpmmark=0, trsmark=0, prpmark=0;

	}
	else if (value==2){
		document.getElementById("id"+1).style.background="#293148"
		document.getElementById("id"+2).style.background="green"
		document.getElementById("id"+3).style.background="#293148"
		document.getElementById("id"+4).style.background="#293148"
		document.getElementById("id"+5).style.background="#293148"
		document.getElementById("id"+6).style.background="#293148"
		document.getElementById("id"+7).style.background="#293148"
		document.getElementById("id"+8).style.background="#293148"
		document.getElementById('logo').innerHTML="<img src='"+value+".png' width='80%'>"
		document.getElementById('logo').style.visibility="visible"
		congmark=0, bjpmark=1, tdpmark=0, fanmark=0, lokmark=0, cpmmark=0, trsmark=0, prpmark=0;

	}
	if (value==3){
		document.getElementById("id"+1).style.background="#293148"
		document.getElementById("id"+2).style.background="#293148"
		document.getElementById("id"+3).style.background="green"
		document.getElementById("id"+4).style.background="#293148"
		document.getElementById("id"+5).style.background="#293148"
		document.getElementById("id"+6).style.background="#293148"
		document.getElementById("id"+7).style.background="#293148"
		document.getElementById("id"+8).style.background="#293148"
		document.getElementById('logo').innerHTML="<img src='"+value+".png' width='100%'>"
		document.getElementById('logo').style.visibility="visible"
		congmark=0, bjpmark=0, tdpmark=1, fanmark=0, lokmark=0, cpmmark=0, trsmark=0, prpmark=0;

	}
	if (value==4){
		document.getElementById("id"+1).style.background="#293148"
		document.getElementById("id"+2).style.background="#293148"
		document.getElementById("id"+3).style.background="#293148"
		document.getElementById("id"+4).style.background="green"
		document.getElementById("id"+5).style.background="#293148"
		document.getElementById("id"+6).style.background="#293148"
		document.getElementById("id"+7).style.background="#293148"
		document.getElementById("id"+8).style.background="#293148"
		document.getElementById('logo').innerHTML="<img src='"+value+".png' width='100%'>"
		document.getElementById('logo').style.visibility="visible"
		congmark=0, bjpmark=0, tdpmark=0, fanmark=1, lokmark=0, cpmmark=0, trsmark=0, prpmark=0;

	}
	if (value==5){
		document.getElementById("id"+1).style.background="#293148"
		document.getElementById("id"+2).style.background="#293148"
		document.getElementById("id"+3).style.background="#293148"
		document.getElementById("id"+4).style.background="#293148"
		document.getElementById("id"+5).style.background="green"
		document.getElementById("id"+6).style.background="#293148"
		document.getElementById("id"+7).style.background="#293148"
		document.getElementById("id"+8).style.background="#293148"
		document.getElementById('logo').innerHTML="<img src='"+value+".jpg' width='100%'>"
		document.getElementById('logo').style.visibility="visible"
		congmark=0, bjpmark=0, tdpmark=0, fanmark=0, lokmark=1, cpmmark=0, trsmark=0, prpmark=0;

	}
	if (value==6){
		document.getElementById("id"+1).style.background="#293148"
		document.getElementById("id"+2).style.background="#293148"
		document.getElementById("id"+3).style.background="#293148"
		document.getElementById("id"+4).style.background="#293148"
		document.getElementById("id"+5).style.background="#293148"
		document.getElementById("id"+6).style.background="green"
		document.getElementById("id"+7).style.background="#293148"
		document.getElementById("id"+8).style.background="#293148"
		document.getElementById('logo').innerHTML="<img src='"+value+".jpg' width='100%'>"
		document.getElementById('logo').style.visibility="visible"
		congmark=0, bjpmark=0, tdpmark=0, fanmark=0, lokmark=0, cpmmark=1, trsmark=0, prpmark=0;

	}
	if (value==7){
		document.getElementById("id"+1).style.background="#293148"
		document.getElementById("id"+2).style.background="#293148"
		document.getElementById("id"+3).style.background="#293148"
		document.getElementById("id"+4).style.background="#293148"
		document.getElementById("id"+5).style.background="#293148"
		document.getElementById("id"+6).style.background="#293148"
		document.getElementById("id"+7).style.background="green"
		document.getElementById("id"+8).style.background="#293148"
		document.getElementById('logo').innerHTML="<img src='"+value+".jpg' width='100%'>"
		document.getElementById('logo').style.visibility="visible"
		congmark=0, bjpmark=0, tdpmark=0, fanmark=0, lokmark=0, cpmmark=0, trsmark=1, prpmark=0;

	}
	if (value==8){
		document.getElementById("id"+1).style.background="#293148"
		document.getElementById("id"+2).style.background="#293148"
		document.getElementById("id"+3).style.background="#293148"
		document.getElementById("id"+4).style.background="#293148"
		document.getElementById("id"+5).style.background="#293148"
		document.getElementById("id"+6).style.background="#293148"
		document.getElementById("id"+7).style.background="#293148"
		document.getElementById("id"+value).style.background="green"
		document.getElementById('logo').innerHTML="<img src='"+value+".png' width='80%'>"
		document.getElementById('logo').style.visibility="visible"
		congmark=0, bjpmark=0, tdpmark=0, fanmark=0, lokmark=0, cpmmark=0, trsmark=0, prpmark=1;

	}
}



function tick(){
	if (congmark==1){
		var vv = confirm("Are you sure want to vote Congress")
		if (vv){
			cong++;
		}
		clear()
	}
	else if (bjpmark==1){
		var vv = confirm("Are you sure want to vote BJP")
		if (vv){
			bjp++;
		}
		clear()
	}
	else if (tdpmark==1){
		var vv = confirm("Are you sure want to vote TDP")
		if (vv){
			tdp++;
		}
		clear()
	}
	else if (fanmark==1){
		var vv = confirm("Are you sure want to vote YSR Congress")
		if (vv){
			fan++;
		}
		clear()
	}
	else if (lokmark==1){
		var vv = confirm("Are you sure want to vote Loksatha")
		if (vv){
			lok++;
		}
		clear()
	}
	else if (cpmmark==1){
		var vv = confirm("Are you sure want to vote CPM")
		if (vv){
			cpm++;
		}
		clear()
	}
	else if (trsmark==1){
		var vv = confirm("Are you sure want to vote TRS")
		if (vv){
			trs++;
		}
		clear()
	}
	else if (prpmark==1){
		var vv = confirm("Are you sure want to vote PRP")
		if (vv){
			prp++;
		}
		clear()
	}
	else{
		alert("Please Vote Any Party")
	}
}


function clear(){
		document.getElementById("id"+1).style.background="#293148"
		document.getElementById("id"+2).style.background="#293148"
		document.getElementById("id"+3).style.background="#293148"
		document.getElementById("id"+4).style.background="#293148"
		document.getElementById("id"+5).style.background="#293148"
		document.getElementById("id"+6).style.background="#293148"
		document.getElementById("id"+7).style.background="#293148"
		document.getElementById("id"+8).style.background="#293148"
		document.getElementById("logo").style.visibility="hidden";
		congmark=0;
		bjpmark=0;
		tdpmark=0;
		fanmark=0;
		lokmark=0;
		cpmmark=0;
		trsmark=0;
		prpmark=0;
}

function cross(){
	if (congmark==1 | bjpmark==1 | tdpmark==1 | fanmark==1 | lokmark==1 | cpmmark==1 | trsmark==1 | prpmark==1){
		var cc=confirm("confirm reset")
		if (cc){
			document.getElementById("id"+1).style.background="#293148"
			document.getElementById("id"+2).style.background="#293148"
			document.getElementById("id"+3).style.background="#293148"
			document.getElementById("id"+4).style.background="#293148"
			document.getElementById("id"+5).style.background="#293148"
			document.getElementById("id"+6).style.background="#293148"
			document.getElementById("id"+7).style.background="#293148"
			document.getElementById("id"+8).style.background="#293148"
			document.getElementById("logo").style.visibility="hidden";
			congmark=0;
			bjpmark=0;
			tdpmark=0;
			fanmark=0;
			lokmark=0;
			cpmmark=0;
			trsmark=0;
			prpmark=0;
		}
	}else{
		alert("No Vote to Cancel");
	}
}

var a;
function total_count(){
	a = window.open('', '', 'height=500, width=600');
	a.document.write(' <pre><h2>Congress        		:' + cong + '</pre>');
    a.document.write(' <pre><h2>BJP             		:' + bjp + '</pre>');
    a.document.write(' <pre><h2>TDP             		:' + tdp + '</pre>');
    a.document.write(' <pre><h2>YSR congress    		:' + fan + '</pre>');
    a.document.write(' <pre><h2>Loksatha        		:' + lok + '</pre>');
    a.document.write(' <pre><h2>CPM             		:' + cpm + '</pre>');
    a.document.write(' <pre><h2>TRS             		:' + trs + '</pre>');
    a.document.write(' <pre><h2>PRP             		:' + prp + '</pre>');
    a.document.write(' <pre>------------------------------------------------------------------------</pre>');
    a.document.write(' <pre><h2>TOTAL VOTES POLLED      	:' + (cong+bjp+tdp+fan+lok+cpm+trs+prp) + '</pre>');
    a.document.write(' <pre>------------------------------------------------------------------------</pre>');

}

function close_count(){
	a.close()
}


function reset(){
	var aa = confirm("Are you sure you want to reset all Votes");
	if (aa){
		cong=0;
		bjp=0;
		tdp=0;
		fan=0;
		lok=0;
		cpm=0;
		trs=0;
		prp=0;
		}
}















// var v;
//         function first() {
//             document.getElementById("divimg").style.visibility = "visible";
//             document.getElementById("b1").style.visibility = "hidden";
//             v = 1;
//         }
//         function second() {
//             document.getElementById("divimg1").style.visibility = "visible";
//             document.getElementById("b2").style.visibility = "hidden";
//             v = 2;
//         }
//         function third() {
//             document.getElementById("divimg2").style.visibility = "visible";
//             document.getElementById("b3").style.visibility = "hidden";
//             v = 3;
//         }
//         function fourth() {
//             document.getElementById("divimg3").style.visibility = "visible";
//             document.getElementById("b4").style.visibility = "hidden";
//             v = 4;
//         }
//         function fifth() {
//             document.getElementById("divimg4").style.visibility = "visible";
//             document.getElementById("b5").style.visibility = "hidden";
//             v = 5;
//         }
//         function sixth() {
//             document.getElementById("divimg5").style.visibility = "visible";
//             document.getElementById("b6").style.visibility = "hidden";
//             v = 6;
//         }
//         function seventh() {
//             document.getElementById("divimg6").style.visibility = "visible";
//             document.getElementById("b7").style.visibility = "hidden";
//             v = 7;
//         }
//         function eight() {
//             document.getElementById("divimg7").style.visibility = "visible";
//             document.getElementById("b8").style.visibility = "hidden";
//             v = 8;
//         }