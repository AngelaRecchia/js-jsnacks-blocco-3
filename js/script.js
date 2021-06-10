var frase = "Esegui esercizio: \r\n 1 - Taglia array \r\n 2 - Confronta parole \r\n 3 - Fondi array \r\n 4 - Iniziale maiuscola";

switch (parseInt(prompt(frase))) {
    case 1:
        /* Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri */

        var array = [];
        while (array.length < 16) {
            var nRand = Math.floor(Math.random()*100 + 1);
            if (!array.includes(nRand)) array.push(nRand);
        }

        document.getElementById("text").innerHTML = array;

        do var inizio = parseInt(prompt("Inserisci l'inizio della porzione da estrarre"));
        while (inizio < 0 || inizio > array.length - 1)
        do var fine = parseInt(prompt("Inserisci la fine della porzione da estrarre"));
        while (fine < inizio || fine > array.length - 1)

        array = cut(array, inizio, fine);
        document.getElementById("text").innerHTML += "<br>Elementi tra " + inizio + " e " + fine +  ": " +  array;

        function cut(arr, n1, n2) {
            var newArr = [];
            for (var i = n1; i <= n2; i++){
                newArr.push(arr[i]);
            }
            return newArr;
        }

        break;
    
        case 2:
            /* Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.  Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due. */
            var parola1 = prompt("Inserisci una parola");
            var parola2 = prompt("Inserisci un'altra parola");
            document.getElementById("text").innerHTML = checkLength(parola1, parola2);

            function checkLength(p1, p2) {
                if (p1.length == p2.length) return p1 + " " + p2;
                else if(p1.length > p2.length) return p1;
                else return p2;
            }
            
            break;
        
        case 3:
            /* Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
            es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */
            var lettere = ["a", "b", "c", "d", "e", "f"];
            var numeri = [1, 2, 3, 4, 5, 6];

            document.getElementById("text").innerHTML = "Lista 1: " + lettere + "<br>Lista 2: " + numeri + "<br>Fusione liste: " + fusion(lettere, numeri);
            console.log(fusion(lettere, numeri));

            function fusion(arr1, arr2) {
                var arr = [];
                if (arr1.length == arr2.length) {
                    for (var i = 0; i < arr1.length; i++) {
                        arr.push(arr1[i]);
                        arr.push(arr2[i]);
                    }
                    return arr;
                } else return "I due array non hanno la stessa lunghezza, impossibile effettuare la fusione.";
            }
            break;

        case 4: 
            /* Scrivi una funzione capitalize che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo */
            var str = prompt("Inserisci una stringa");
            document.getElementById("text").innerHTML = cap(str);

            /* con slice */
            function capitalize(string) {
                return str = str[0].toUpperCase() + str.slice(1);
            }

            /* manualmente */
            function cap(string) {
                var strUp = string[0].toUpperCase();
                for (var i = 1; i < string.length; i++) {
                    strUp += string[i];
                }
                return strUp;
            }
            break;

}




