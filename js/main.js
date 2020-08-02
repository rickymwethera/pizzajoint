function Pizza(pType, pSize, toppings, crust, numberofPizzas) {
    this.pType = pType;
    this.pSize = pSize;
    this.toppings = toppings;
    this.crust = crust;
    this.numberofPizzas = numberofPizzas;
    this.price = 0;
}


function placeOrder() {
    event.preventDefault();
    var small = 600;
    var medium = 900;
    var large = 1300;
    var extra = 1600;
    var size = document.getElementById("pSize").value;
    var numPizza = parseInt(document.getElementById("numberofPizzas").value);
    var type = document.getElementById("pType").value;
    var crust = document.getElementById("crust").value;
    var top = document.getElementById("toppings").value;
    var total = 0;

    if(size== "" && type=="" && crust=="") {
        alert("Please place your order first");
    }
    if (size== "1") {
        total = small;
    }
    else if (size== "2") {
        total = medium;
    } else if (size== "3") {
        total = large;
    }else if (size== "4") {
        total = extra;
    }

    if(crust=="1") {
        total = total + 200;
    } else if (crust=="2") {
        total = total + 300;
    }else if (crust=="3") {
        total = total + 250;
    }else if (crust=="4") {
        total = total + 400;
    }
    
    

    total = total * numPizza;
    document.getElementById("price").innerHTML = 
    ("your total bill comes to " + total);

    


}
