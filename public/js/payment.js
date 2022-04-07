/*  if(window.location.hash) {
      var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
      alert (hash);
      // hash found
  } else {
      // No hash found
  }*/


 /*let URLactual = window.location;
    let modal = URLactual.toString().slice(-1);
    console.log(modal)*/
   // let method =


function change(e) {

    

   
   console.log(e);
 
   // Curso 1
   if (e === "USD-1") {
    document.getElementsByClassName("content-1")[0].innerHTML = `Pagar en dólares a través de paypal:<br><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="HWNFW8VQVLD2L">
        <input type="image" src="https://www.paypalobjects.com/es_XC/AR/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
        </form>
        `;
} else if (e === "ARS-1") {
    document.getElementsByClassName("content-1")[0].innerHTML = `<a class="btn btn-info btn-xl text-uppercase mt-2" href="https://mpago.la/2UjGDjz">Pagar en pesos por MercadoPago</a> <br> Pagar en pesos Argentinos a través de transferencia al siguiente CBU: XXXXXXXXXXXX`;
} else if(e === "UYU-1") {
    document.getElementsByClassName("content-1")[0].innerHTML = `Pagar en pesos Uruguayos a través de transferencia al siguiente CBU: XXXXXXXXXXX1`;
}

// Curso 2


else if (e === "USD-2") {
    document.getElementsByClassName("content-2")[0].innerHTML = `Pagar en dólares a través de paypal:<br><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="HWNFW8VQVLD2L">
        <input type="image" src="https://www.paypalobjects.com/es_XC/AR/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
        </form>
        `;
} else if (e === "ARS-2") {
    document.getElementsByClassName("content-2")[0].innerHTML = `<a class="btn btn-info btn-xl text-uppercase mt-2" href="https://mpago.la/2UjGDjz">Pagar en pesos por MercadoPago</a> <br> Pagar en pesos Argentinos a través de transferencia al siguiente CBU: XXXXXXXXXXXX`;
} else if(e === "UYU-2") {
    document.getElementsByClassName("content-2")[0].innerHTML = `Pagar en pesos Uruguayos a través de transferencia al siguiente CBU: XXXXXXXXXXX2`;
}
// Curso 3

else if (e === "USD-3") {
    document.getElementsByClassName("content-3")[0].innerHTML = `Pagar en dólares a través de paypal:<br><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="HWNFW8VQVLD2L">
        <input type="image" src="https://www.paypalobjects.com/es_XC/AR/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
        </form>
        `;
} else if (e === "ARS-3") {
    document.getElementsByClassName("content-3")[0].innerHTML = `<a class="btn btn-info btn-xl text-uppercase mt-2" href="https://mpago.la/2UjGDjz">Pagar en pesos por MercadoPago</a> <br> Pagar en pesos Argentinos a través de transferencia al siguiente CBU: XXXXXXXXXXXX`;
} else if(e === "UYU-3") {
    document.getElementsByClassName("content-3")[0].innerHTML = `Pagar en pesos Uruguayos a través de transferencia al siguiente CBU: XXXXXXXXXXX3`;
}

// Curso 4

else if (e === "USD-4") {
    document.getElementsByClassName("content-4")[0].innerHTML = `Pagar en dólares a través de paypal:<br><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="HWNFW8VQVLD2L">
        <input type="image" src="https://www.paypalobjects.com/es_XC/AR/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
        </form>
        `;
} else if (e === "ARS-4") {
    document.getElementsByClassName("content-4")[0].innerHTML = `<a class="btn btn-info btn-xl text-uppercase mt-2" href="https://mpago.la/2UjGDjz">Pagar en pesos por MercadoPago</a> <br> Pagar en pesos Argentinos a través de transferencia al siguiente CBU: XXXXXXXXXXXX`;
} else if(e === "UYU-4") {
    document.getElementsByClassName("content-4")[0].innerHTML = `Pagar en pesos Uruguayos a través de transferencia al siguiente CBU: XXXXXXXXXXX4`;
}

// Curso 5

else if (e === "USD-5") {
    document.getElementsByClassName("content-5")[0].innerHTML = `Pagar en dólares a través de paypal:<br><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="HWNFW8VQVLD2L">
        <input type="image" src="https://www.paypalobjects.com/es_XC/AR/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
        </form>
        `;
} else if (e === "ARS-5") {
    document.getElementsByClassName("content-5")[0].innerHTML = `<a class="btn btn-info btn-xl text-uppercase mt-2" href="https://mpago.la/2UjGDjz">Pagar en pesos por MercadoPago</a> <br> Pagar en pesos Argentinos a través de transferencia al siguiente CBU: XXXXXXXXXXXX`;
} else if(e === "UYU-5") {
    document.getElementsByClassName("content-5")[0].innerHTML = `Pagar en pesos Uruguayos a través de transferencia al siguiente CBU: XXXXXXXXXXX5`;
}

// Curso 6

else if (e === "USD-6") {
    document.getElementsByClassName("content-6")[0].innerHTML = `Pagar en dólares a través de paypal:<br><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="HWNFW8VQVLD2L">
        <input type="image" src="https://www.paypalobjects.com/es_XC/AR/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
        </form>
        `;
} else if (e === "ARS-6") {
    document.getElementsByClassName("content-6")[0].innerHTML = `<a class="btn btn-info btn-xl text-uppercase mt-2" href="https://mpago.la/2UjGDjz">Pagar en pesos por MercadoPago</a> <br> Pagar en pesos Argentinos a través de transferencia al siguiente CBU: XXXXXXXXXXXX`;
} else if(e === "UYU-6") {
    document.getElementsByClassName("content-6")[0].innerHTML = `Pagar en pesos Uruguayos a través de transferencia al siguiente CBU: XXXXXXXXXXX6`;
}

}
