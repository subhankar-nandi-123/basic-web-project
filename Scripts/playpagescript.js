var x = 15;
var get=100;
 m = setInterval(fnn,1000);
function fnn(){
	x = x-1;
	document.getElementById("chang").innerHTML = x;
	if(x<6){
		document.getElementById("chang").style.color="red";
	}
	if(x<10 & x>5){
		document.getElementById("chang").style.color="blue";
	}
	if (x<1){
		clearInterval(m);
		
	}
	
}



b1=b2=b3=b4=b5=b6=b7=b8=b9=b10=b11=b12=b13=b14=b15=b16=1;

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
