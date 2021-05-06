//Genera 5 DIVERSI numeri da 1 a 100
var n_list = [];
for (var i = 0; i < 5; i++) {
    var n = parseInt(Math.random() * 100) + 1;
    if (n_list.includes(n)) {
        i--
    } else {
        n_list.push(n);
    }
}

//Un alert() espone 5 numeri generati casualmente.
console.log(n_list); //controllare console per i numeri
alert("Memorizza questa sequenza di numeri \r\n" + n_list + "\r\n\r\n" + "Avrai 30 secondi per ricordare i numeri dopo aver confermato.");
var timer = 30; //secondi
var score = 0;
var checked_n = [];
//Da li parte un timer di 30 secondi.
var countdown = setInterval(function () {
    document.getElementById("countdown").innerHTML = timer;
    if (timer == 0) {
        //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        // Se indovina aumenta il punteggio di 1 e lo inserisce in una lista dei numeri indovinati da mostrare alla fine.
        for (var i = 0; i < 5; i++) {
            var n_user = parseInt(prompt("Inserisci un numero che ricordi da 1 a 100 🤔"))
            if (n_list.includes(n_user)) {
                score++
                checked_n.push(n_user);
            }
        }
        //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        alert(`Hai indovinato:  ${score} numeri  (${checked_n})`)
        clearInterval(countdown);
    } else {
        timer--;
    }
}, 1000)


