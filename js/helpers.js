/* function getRamdomNumber(size){
es lo mismo solo que mas actual
} */
let getRamdomNumber = size => {
    /* Math.random()*size genera numero decimales 0 al 1*/
    /* floor redondea */
    return Math.floor(Math.random() * size);
}

/*  */
let getDistance = (e, target) => {
    /* e es el evento de donde se encuentra el mouse */
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;

    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

/* funcion de si esta cerca */
let getDistanceHint = distance => {
    if (distance < 30) {
        return "Estas recontra cerca!";
    } else if (distance < 40) {
        return "Realmente cerca";
    } else if (distance < 60) {
        return "Caliente bro";
    } else if (distance < 100) {
        return "Ya estas tibio";
    } else if (distance < 180) {
        return "Frio";
    } else if (distance < 360) {
        return "Realmente Frio";
    } else {
        return "Recontra lejos";
    }


}
