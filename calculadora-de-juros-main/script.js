function calcular(){

 let taxa = parseInt(document.getElementById('taxa').value);
 let capitalini= parseInt(document.getElementById('capitalini').value);
 let tempo= parseInt(document.getElementById('tempo').value);

 taxa = taxa/100
 let resultado = taxa*capitalini*tempo;
  document.getElementById("resultado").textContent=' seu juros e : ' + resultado

  let montante
   montante = capitalini+resultado;
    document.getElementById("montante").textContent=' seu montante e : ' + montante
}


