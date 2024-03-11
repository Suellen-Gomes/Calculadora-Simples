document.getElementById("execute").addEventListener('click', Calcular)

function Calcular(){
	let numberOne = Number(document.getElementById("NumberOne").value);
	let numberTwo = Number(document.getElementById("NumberTwo").value);
	let signal = document.getElementById("Signal").value;
	let Display = document.getElementById("display");
	let count = '';

	switch(signal){
	  case '+':
	  	count = numberOne + numberTwo;
	  	break;

	  case '-':
	  	count = numberOne - numberTwo;
	  	break;

	  case '*':
	  	count = numberOne * numberTwo;
	  	break;

	  case '/':
	  	count = numberOne / numberTwo;
	  	break;

	  default:
	  	alert("Error!")

	}

	return Display.innerHTML = "O resultado é " + count;

}