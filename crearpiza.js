/* CAROLINA ROJAS COLLANTE */
function crearpizza(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

var pizza1 = crearpizza("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

var pizza2 = crearpizza("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

var pizza3 = crearpizza("delgada y crujiente", "blanca", ["mozzarella", "parmesano"], ["espinacas", "tomates", "ajo"]);
console.log(pizza3);

var pizza4 = crearpizza("sin gluten", "alfredo", ["mozzarella", "cheddar"], ["pollo", "pimientos rojos", "piña"]);
console.log(pizza4);
