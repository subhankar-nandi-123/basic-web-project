b1=b2=b3=b4=b5=b6=b7=b8=b9=b10=b11=b12=b13=b14=b15=b16=1;
var x = 30;
var get=100;
var arr = [["VIRAT KOHLI","M.S DHONI","SACHIN TENDULKAR","RAHUL DRAVID"],
["SUNIL GAVASKAR","SOURAV GANGULY","KAPIL DEV","VIRENDER SEHWAG"],
["YUVRAJ SINGH","HARBHAJAN SINGH","GAUTAM GAMBHIR","ANIL KUMBLE"],
["ROHIT SHARMA","ZAHEER KHAN","RAVINDRA JADEJA","AJINKYA RAHANE"]];
m = setInterval(fnn,1000);
var r_no;
var c_no;



function fnn(){
	x = x-1;
	document.getElementById("chang").innerHTML = x;
	if(x<11){
		document.getElementById("chang").style.color="red";
	}
	if(x<21 & x>10){
		document.getElementById("chang").style.color="#f0e807";
	}
	if (x<1){
		clearInterval(m);
		
	}
	
}


function image_changer(){
	r_no = Math.floor((Math.random())*10)%4;
	c_no = Math.floor((Math.random())*10)%4;
	var ele = "url(\"../Pictures/"+"img" + r_no + c_no + ".jpg" + "\")";
	document.getElementById("img_changer").style.backgroundImage = ele;
	options_changer();
	
}

function options_changer(){// Code for option changer.
	var randd = Math.floor((Math.random())*10)%4;
	var temp = "op" + randd;
	var ch = 0;
	document.getElementById(temp).innerHTML= arr[r_no][c_no];
	for(var i=0;i < 4;i++){
		if(i == randd){i = i + 1;}
		var ttemp = "op" + i;
		if(ch < 4){
			if(ch == r_no){ch = ch + 1;}
		    document.getElementById(ttemp).innerHTML= arr[ch][c_no];
			ch++;
		}
	}
}





function btnfn1()
{
	document.getElementById("b1").style.display ="none" ;
}

function btnfn2()
{ 
    document.getElementById("b2").style.display ="none" ;
	if(b1++ == 1){
	get = get-3;
	document.getElementById("MS").innerHTML = get ;
	}
	
	
}

function btnfn3()
{
	if(b2++ == 1){
	get = get-3;
	}
	document.getElementById("b3").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn4()
{
	if(b3++ == 1){
	get = get-3;
	}
	document.getElementById("b4").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn5()
{
	document.getElementById("b5").style.display ="none" ;
}

function btnfn6()
{
	if(b4++ == 1){
	get = get-3;
	}
	document.getElementById("b6").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn7()
{
	if(b5++ == 1){
	get = get-10;
	}
	document.getElementById("b7").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn8()
{
	if(b6++ == 1){
	get = get-15;
	}
	document.getElementById("b8").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn9()
{
	if(b7++ == 1){
	get = get-10;
	}
	document.getElementById("b9").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn10()
{
	if(b8++ == 1){
	get = get-3;
	}
	document.getElementById("b10").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn11()
{
	if(b9++ == 1){
	get = get-3;
	}
	document.getElementById("b11").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn12()
{
	if(b10++ == 1){
	get = get-10;
	}
	document.getElementById("b12").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn13()
{
	if(b11++ == 1){
	get = get-15;
	}
	document.getElementById("b13").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn14()
{
	if(b12++ == 1){
	get = get-10;
	}
	document.getElementById("b14").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn15()
{
	if(b13++ == 1){
	get = get-3;
	}
	document.getElementById("b15").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn16()
{
	document.getElementById("b16").style.display ="none" ;
}

function btnfn17()
{
	if(b14++ == 1){
	get = get-3;
	}
	document.getElementById("b17").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn18()
{
	if(b15++ == 1){
	get = get-3;
	}
	document.getElementById("b18").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn19()
{
	if(b16++ == 1){
	get = get-3;
	}
	document.getElementById("b19").style.display ="none" ;
	document.getElementById("MS").innerHTML = get ;
}

function btnfn20()
{
	document.getElementById("b20").style.display ="none" ;
}

function btnfn21()
{
	document.getElementById("b21").style.display ="none" ;
}

function btnfn22()
{
	document.getElementById("b22").style.display ="none" ;
}

function btnfn23()
{
	document.getElementById("b23").style.display ="none" ;
}

function btnfn24()
{
	document.getElementById("b24").style.display ="none" ;
}

function btnfn25()
{
	document.getElementById("b25").style.display ="none" ;
}
