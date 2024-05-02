let nomeHeroi= "Golias"
let xpHeroi= 5900
let ranking;

if (xpHeroi <=1000){
  ranking= "Ferro";

} else if(xpHeroi >=1001 && xpHeroi <=2000) {
  ranking="Bronze";

} else if(xpHeroi >=2001 && xpHeroi <=3000) {
    ranking="Prata"; 

} else if(xpHeroi >=3001 && xpHeroi <=4000) {
    ranking="ouro";

} else if(xpHeroi >=4001 && xpHeroi <=5000) {
    ranking="platina";

} else if(xpHeroi >=5001 && xpHeroi <=6000) { 
    ranking="Ascendente";

} else if(xpHeroi >=6001 && xpHeroi <=7000) {
    ranking="Imortal";

}else { 
    ranking="Radiante";
}

console.log("O Herói de nome "+ nomeHeroi + " está no Ranking " + ranking);