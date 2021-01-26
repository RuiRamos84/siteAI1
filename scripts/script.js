window.onscroll = function() {navbarscroll()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navbarscroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/**COMPARADOR **/
var car1 = ["Tesla Model S", "639km", "613cv/451kW", "261 km/h", "2,5s", "Sim", "Sim", "2236kg", "5", "804l", "106.600€"];
var car2 = ["Tesla Model 3", "567km", "351cv/258kW", "261 km/h", "3,3s", "Sim", "Sim", "1844kg", "5", "524l", "59.600€"];
var car3 = ["Tesla Model X", "548km", "613cv/451kW", "261 km/h", "2,8s", "Sim", "Sim", "2494kg", "7", "2487l", "112.000€"];
var car4 = ["Tesla Model Y", "505km", "462cv/340kW", "241 km/h", "3,7s", "Sim", "Sim", "2003kg", "7", "1900l", "71.000€"];
var car5 = ["Porsche Taycan 4S", "350km", "530cv/390kW", "250 km/h", "4,0s", "Sim", "Não", "2003kg", "5", "500l", "110.128€"];
var car6 = ["Renault Zoe", "450km", "110cv/80kW", "140 km/h", "11,4s", "Não", "Não", "1988kg", "5", "425l", "23.690€"];
var car7 = ["Byd E6", "300km", "122cv/90kW", "160 km/h", "8,0s", "Sim", "Não", "2020kg", "5", "450l", "32.900€"];
var car8 = ["Volkswagen e-Golf", "231km", "136cv/100kW", "150 km/h", "9,6s", "Sim", "Não", "1988kg", "5", "1231l", "42.901€"];


function comp1(elem) {
  var i=elem;
  var x = document.getElementById("dropdown"+i).value;
  if(x==1){ 
    document.getElementById("image"+i).innerHTML = "&nbsp"; 
    document.getElementById("nome"+i).innerHTML = "&nbsp";
    document.getElementById("autonomia"+i).innerHTML = "&nbsp";
    document.getElementById("potencia"+i).innerHTML = "&nbsp";
    document.getElementById("velocidade"+i).innerHTML = "&nbsp";
    document.getElementById("aceleracao"+i).innerHTML = "&nbsp";
    document.getElementById("super"+i).innerHTML = "&nbsp";
    document.getElementById("piloto"+i).innerHTML = "&nbsp";
    document.getElementById("peso"+i).innerHTML = "&nbsp";
    document.getElementById("lugares"+i).innerHTML = "&nbsp";
    document.getElementById("capacidade"+i).innerHTML = "&nbsp";
    document.getElementById("preco"+i).innerHTML = "&nbsp";
  }
  if(x==2){ 
    document.getElementById("image"+i).innerHTML ="<img src=\"./img/Todas/comp/tesla_mode_s.jpg\" width=\"175px\" height=\"125px\">";
    document.getElementById("nome"+i).innerHTML = car1[0];
    document.getElementById("autonomia"+i).innerHTML = car1[1];
    document.getElementById("potencia"+i).innerHTML = car1[2];
    document.getElementById("velocidade"+i).innerHTML = car1[3];
    document.getElementById("aceleracao"+i).innerHTML = car1[4];
    document.getElementById("super"+i).innerHTML = car1[5];
    document.getElementById("piloto"+i).innerHTML = car1[6];
    document.getElementById("peso"+i).innerHTML = car1[7];
    document.getElementById("lugares"+i).innerHTML = car1[8];
    document.getElementById("capacidade"+i).innerHTML = car1[9];
    document.getElementById("preco"+i).innerHTML = car1[10];
  }
  if(x==3){
    document.getElementById("image"+i).innerHTML ="<img src=\"./img/Todas/comp/tesla_model_3.jpeg\" width=\"175px\" height=\"125px\">";  
    document.getElementById("nome"+i).innerHTML = car2[0];
    document.getElementById("autonomia"+i).innerHTML = car2[1];
    document.getElementById("potencia"+i).innerHTML = car2[2];
    document.getElementById("velocidade"+i).innerHTML = car2[3];
    document.getElementById("aceleracao"+i).innerHTML = car2[4];
    document.getElementById("super"+i).innerHTML = car2[5];
    document.getElementById("piloto"+i).innerHTML = car2[6];
    document.getElementById("peso"+i).innerHTML = car2[7];
    document.getElementById("lugares"+i).innerHTML = car2[8];
    document.getElementById("capacidade"+i).innerHTML = car2[9];
    document.getElementById("preco"+i).innerHTML = car2[10];
  }
  if(x==4){  
    document.getElementById("image"+i).innerHTML ="<img src=\"./img/Todas/comp/teslaX.png\" width=\"175px\" height=\"125px\">";  
    document.getElementById("nome"+i).innerHTML = car3[0];
    document.getElementById("autonomia"+i).innerHTML = car3[1];
    document.getElementById("potencia"+i).innerHTML = car3[2];
    document.getElementById("velocidade"+i).innerHTML = car3[3];
    document.getElementById("aceleracao"+i).innerHTML = car3[4];
    document.getElementById("super"+i).innerHTML = car3[5];
    document.getElementById("piloto"+i).innerHTML = car3[6];
    document.getElementById("peso"+i).innerHTML = car3[7];
    document.getElementById("lugares"+i).innerHTML = car3[8];
    document.getElementById("capacidade"+i).innerHTML = car3[9];
    document.getElementById("preco"+i).innerHTML = car3[10];
  }
  if(x==5){ 
    document.getElementById("image"+i).innerHTML ="<img src=\"./img/Todas/comp/tesla_model_y.jpg\" width=\"175px\" height=\"125px\">"; 
    document.getElementById("nome"+i).innerHTML = car4[0];
    document.getElementById("autonomia"+i).innerHTML = car4[1];
    document.getElementById("potencia"+i).innerHTML = car4[2];
    document.getElementById("velocidade"+i).innerHTML = car4[3];
    document.getElementById("aceleracao"+i).innerHTML = car4[4];
    document.getElementById("super"+i).innerHTML = car4[5];
    document.getElementById("piloto"+i).innerHTML = car4[6];
    document.getElementById("peso"+i).innerHTML = car4[7];
    document.getElementById("lugares"+i).innerHTML = car4[8];
    document.getElementById("capacidade"+i).innerHTML = car4[9];
    document.getElementById("preco"+i).innerHTML = car4[10];
  }
  if(x==6){ 
    document.getElementById("image"+i).innerHTML ="<img src=\"./img/Todas/comp/taycan.jpg\" width=\"175px\" height=\"125px\">"; 
    document.getElementById("nome"+i).innerHTML = car5[0];
    document.getElementById("autonomia"+i).innerHTML = car5[1];
    document.getElementById("potencia"+i).innerHTML = car5[2];
    document.getElementById("velocidade"+i).innerHTML = car5[3];
    document.getElementById("aceleracao"+i).innerHTML = car5[4];
    document.getElementById("super"+i).innerHTML = car5[5];
    document.getElementById("piloto"+i).innerHTML = car5[6];
    document.getElementById("peso"+i).innerHTML = car5[7];
    document.getElementById("lugares"+i).innerHTML = car5[8];
    document.getElementById("capacidade"+i).innerHTML = car5[9];
    document.getElementById("preco"+i).innerHTML = car5[10];
  }
  if(x==7){ 
    document.getElementById("image"+i).innerHTML ="<img src=\"./img/Todas/comp/renault_zoe.jpg\" width=\"175px\" height=\"125px\">";     
    document.getElementById("nome"+i).innerHTML = car6[0];
    document.getElementById("autonomia"+i).innerHTML = car6[1];
    document.getElementById("potencia"+i).innerHTML = car6[2];
    document.getElementById("velocidade"+i).innerHTML = car6[3];
    document.getElementById("aceleracao"+i).innerHTML = car6[4];
    document.getElementById("super"+i).innerHTML = car6[5];
    document.getElementById("piloto"+i).innerHTML = car6[6];
    document.getElementById("peso"+i).innerHTML = car6[7];
    document.getElementById("lugares"+i).innerHTML = car6[8];
    document.getElementById("capacidade"+i).innerHTML = car6[9];
    document.getElementById("preco"+i).innerHTML = car6[10];
  }
  if(x==8){ 
    document.getElementById("image"+i).innerHTML ="<img src=\"./img/Todas/comp/byd_e6.png\" width=\"175px\" height=\"125px\">";
    document.getElementById("nome"+i).innerHTML = car7[0];
    document.getElementById("autonomia"+i).innerHTML = car7[1];
    document.getElementById("potencia"+i).innerHTML = car7[2];
    document.getElementById("velocidade"+i).innerHTML = car7[3];
    document.getElementById("aceleracao"+i).innerHTML = car7[4];
    document.getElementById("super"+i).innerHTML = car7[5];
    document.getElementById("piloto"+i).innerHTML = car7[6];
    document.getElementById("peso"+i).innerHTML = car7[7];
    document.getElementById("lugares"+i).innerHTML = car7[8];
    document.getElementById("capacidade"+i).innerHTML = car7[9];
    document.getElementById("preco"+i).innerHTML = car7[10];
  }
  if(x==9){ 
    document.getElementById("image"+i).innerHTML ="<img src=\"./img/Todas/comp/vw_egolf.jpg\" width=\"175px\" height=\"125px\">";
    document.getElementById("nome"+i).innerHTML = car8[0];
    document.getElementById("autonomia"+i).innerHTML = car8[1];
    document.getElementById("potencia"+i).innerHTML = car8[2];
    document.getElementById("velocidade"+i).innerHTML = car8[3];
    document.getElementById("aceleracao"+i).innerHTML = car8[4];
    document.getElementById("super"+i).innerHTML = car8[5];
    document.getElementById("piloto"+i).innerHTML = car8[6];
    document.getElementById("peso"+i).innerHTML = car8[7];
    document.getElementById("lugares"+i).innerHTML = car8[8];
    document.getElementById("capacidade"+i).innerHTML = car8[9];
    document.getElementById("preco"+i).innerHTML = car8[10];
  }   
  compare() 
}

function compare(){
  var i=1;
  var w=2;
  var x = document.getElementById("dropdown1").value; 
  var y = document.getElementById("dropdown2").value; 
  
  if(x>1&&y>1){

    var auto = document.getElementById("autonomia"+i).textContent;
    var auto2 = document.getElementById("autonomia"+w).textContent;

  if(auto>auto2){
        document.getElementById("auton_arrow"+i).innerHTML ="<img src=\"./img/Todas/comp/green.png\" width=\"15px\" height=\"15px\">";//verde
        document.getElementById("auton_arrow"+w).innerHTML ="<img src=\"./img/Todas/comp/red.png\" width=\"15px\" height=\"15px\">";
        
  }
  else if(auto<auto2) {
        document.getElementById("auton_arrow"+i).innerHTML ="<img src=\"./img/Todas/comp/red.png\" width=\"15px\" height=\"15px\">";//verde
        document.getElementById("auton_arrow"+w).innerHTML ="<img src=\"./img/Todas/comp/green.png\" width=\"15px\" height=\"15px\">";//vermelho
  }
  else if(auto==auto2){
        document.getElementById("auton_arrow"+i).innerHTML ="<img src=\"./img/Todas/comp/null.png\" width=\"15px\" height=\"15px\">";//verde
        document.getElementById("auton_arrow"+w).innerHTML ="<img src=\"./img/Todas/comp/null.png\" width=\"15px\" height=\"15px\">";//vermelho
  }
}
if(x==1||y==1){
        document.getElementById("auton_arrow"+i).innerHTML ="&nbsp"
        document.getElementById("auton_arrow"+w).innerHTML ="&nbsp"
  }
  

}
/**FIM COMPARADOR **/