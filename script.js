// // Prendiamo il body
// const body = document.body;

// // Otteniamo il colore calcolato
// const style = getComputedStyle(body);
// const colore = style.color;

// // Stampiamo in console
// console.log(`Il testo è blu ${colore}`);

function stampaColoreTesto() {
    // Prendiamo il body
    const body = document.body;

    // Leggiamo lo stile calcolato
    const style = getComputedStyle(body);
    const colore = style.color;

    // Mappa da rgb a nome colore
    let nomeColore = colore;

    if (colore === 'rgb(0, 0, 255)') {
        nomeColore = 'blu';
    } else if (colore === 'rgb(255, 0, 0)') {
        nomeColore = 'rosso';
    } else if (colore === 'rgb(0, 0, 0)') {
        nomeColore = 'nero';
    }

    // Stampa in console della pagina html
    console.log(`Il testo è ${nomeColore}`);
}

// Chiamiamo la funzione
stampaColoreTesto();