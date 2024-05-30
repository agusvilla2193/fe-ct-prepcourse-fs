for (var i = 0; i < 5; i++){
    setTimeout(function(){console.log(i)}, 1000);
}

setTimeout(function() {
    console.log("Valor final de 'i' usando 'var': ", i);
}, 6000);

/* En este primer ejemplo podemos ver que no va a mostrar lo que queremos, pero al final va a mostrar
el cartel luego de los 6 segundos */








/* for (let i = 0; i <= 5; i++){
    setTimeout(function(){console.log(i)}, 1000);
}

setTimeout(function() {
    console.log("Valor final de 'i' usando 'let': ", i);
}, 6000);
 */

/* En este ultimo podemos ver que al utilizar let y aclarar que sea menor o igual que 5 va a mostrar lo que
queremos pero al final va a dar un error, porque la variable la toma como no declarada. */