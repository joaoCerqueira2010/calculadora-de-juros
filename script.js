function calcular(){

 let taxa = parseInt(document.getElementById('taxa').value);
 let capitalini= parseInt(document.getElementById('capitalini').value);
 let tempo= parseInt(document.getElementById('tempo').value);

  let resultado = taxa*capitalini*tempo;
  document.getElementById("resultado").textContent=' seu juros e : ' + resultado

  let montante
   montante = montante+resultado;
    document.getElementById("montante").textContent=' seu montante e : ' + montante
}


