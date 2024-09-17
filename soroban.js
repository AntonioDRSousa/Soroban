drawSoroban = function(){	
	context.fillStyle = "brown";
	for(var i=1;i<12;i++){
		context.fillRect(i*50,0,10,300);
	}

	context.fillStyle = "orange";
	context.fillRect(0,0,600,25);
	context.fillRect(0,75,600,25);
	context.fillRect(0,275,600,25);
}

drawPieces = function(n){
	for(var i=0;i<11;i++){
		context.font = "25px Arial";
		context.fillStyle = "black";
		context.fillText((n[i]).toString(),(i+1)*50 ,95 );
		let x = n[i]%5;
		let y = 4 - x;
		let z = Math.floor(n[i]/5);
		context.fillStyle = "yellow";
		for(var j=0;j<y;j++){
			context.fillRect((i+1)*50-10,245-25*j-5*j,30,20);
		}
		for(var j=0;j<x;j++){
			context.fillRect((i+1)*50-10,105+25*j+5*j,30,20);
		}
		context.fillRect((i+1)*50-10,30+20*z,30,20);
	}
}

draw = function(n){
	context.clearRect(0,0,canvas.width,canvas.height);
	drawSoroban();
	drawPieces(n);
}

up = function(z){
	if((n[z]%5)<4){
		n[z]++;
	}
	draw(n);
}

down = function(z){
	if((n[z]%5)>0){
		n[z]--;
	}
	draw(n);
}

five = function(z){
	if(n[z]>4){
		n[z]-=5;
	}
	else{
		n[z]+=5;
	}
	draw(n);
}

read = function(){
	x=document.getElementById("inread").value;
	s=x.toString();
	if(/^[0-9]*$/.test(s)){
		if(s.length<12){
			n = new Array(11).fill(0);
			for(var i=(s.length-1);i>=0;i--){
				n[10-i]=Number(s[s.length-i-1]);
			}
			draw(n);
		}
		else{
			alert("Error. Number with more than 11 digits.");
		}
	}
	else{
		alert("Invalid Input.");
	}
}

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

n = [0,0,0,0,0,0,0,0,0,0,0];
draw(n);