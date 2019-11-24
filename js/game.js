const ancho = 400;
const alto = 400;

/* Objetivo de donde aparecera el tesoro */
let target = {
    x: getRamdomNumber(ancho),
    y: getRamdomNumber(alto)
};

/* console.log(target);  muestra la posicion del tesoro*/

let $map = document.getElementById("map");/* guarda el map */
let $distance = document.getElementById("distance");
let clicks = 0;
/* captura el evento click de id map */
$map.addEventListener("click", function (e) {
    clicks++;
    /* muestra la distancia de que tan lejos estoy del target */
    let distance = getDistance(e, target);
    /* console.log(distance); */
    /* muestra que tan cerca estoy */
    let distanceHint = getDistanceHint(distance);
    /* alt 96 */
    $distance.innerHTML = `<h1>${distanceHint}</h1>`

    if (distance < 20) {
        alert(`Tesoro encontrado en ${clicks} clicks`);
        location.reload();
    }

})