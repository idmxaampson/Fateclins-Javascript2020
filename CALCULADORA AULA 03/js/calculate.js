			function multiplicar(){

				var n1 = document.getElementById("n1").value;
				n1=parseInt(n1);
				console.log(n1);
				var n2 = parseInt(document.getElementById("n2").value);
				console.log(n2);
				var n3 = n1*n2;
				console.log(n3);
				console.log(document.getElementById("resultado"));
				document.getElementById("resultado").value = n3;
				
			}
			function somar(){

				var n1 = document.getElementById("n1").value;
				n1=parseInt(n1);
				console.log(n1);
				var n2 = parseInt(document.getElementById("n2").value);
				console.log(n2);
				var n3 = n1+n2;
				console.log(n3);
				console.log(document.getElementById("resultado"));
				document.getElementById("resultado").value = n3;

			}
			function subtrair(){

				var n1 = document.getElementById("n1").value;
				n1=parseInt(n1);
				console.log(n1);
				var n2 = parseInt(document.getElementById("n2").value);
				console.log(n2);
				var n3 = n1-n2;
				console.log(n3);
				console.log(document.getElementById("resultado"));
				document.getElementById("resultado").value = n3;

			}
			function dividir(){

				var n1 = document.getElementById("n1").value;
				n1=parseInt(n1);
				console.log(n1);
				var n2 = parseInt(document.getElementById("n2").value);
				if(n2 != 0){
					console.log(n2);
				var n3 = n1/n2;
				console.log(n3);
				console.log(document.getElementById("resultado"));
				document.getElementById("resultado").value = n3;
			}
			else{
					document.getElementById("resultado").value = "Não foi possivel dividir por 0";
		}
				

}
