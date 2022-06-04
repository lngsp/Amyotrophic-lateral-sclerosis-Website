class Produs {
    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
}

localStorage.clear();

function adauga() {
    const numeProdus = document.getElementById("nume_produs").value;
    const cantitate = document.getElementById("cantitate_produs").value;
    let produse = localStorage.getItem('produse');

    console.log(localStorage);
    if (produse == null) {
        produse = [];
    } else {
        produse = JSON.parse(produse);
    }

    let nr = localStorage.getItem('nr');
    if (nr == null) {
        nr = 1;
    } else {
        nr = JSON.parse(nr);
    }

    let id = nr;
    produse.push(new Produs(id, numeProdus, cantitate));
    localStorage.setItem('produse', JSON.stringify(produse));
    localStorage.setItem('nr', JSON.stringify(nr + 1));

    document.getElementById("cumparaturi_textarea").innerHTML = localStorage.getItem("produse");


    var w = new Worker('js/worker.js');
    setInterval(()=>{
        var a = localStorage.getItem('produse');
        w.postMessage(a);
    },1000);
    
    w.onmessage = (dif) => {
        const b = dif.data;
        console.log(b);
    }
}

