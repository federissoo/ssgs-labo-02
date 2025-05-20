# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una Command-Line Interface (CLI) Node.js con diverse utilità per la manipolazione di stringhe.

## Funzionalità Principali

Le funzionalità offerte da questa CLI sono le seguenti:

* **Inversione di una stringa**: Inverte l'ordine dei caratteri in una data stringa.
* **Verifica se una stringa è palindroma**: Controlla se una stringa si legge allo stesso modo al contrario.
* **Troncamento di una stringa a una lunghezza massima specificata**: Riduce una stringa a una lunghezza massima, aggiungendo eventualmente dei puntini di sospensione.
* **Conteggio delle occorrenze di ciascun carattere in una stringa**: Restituisce un conteggio di quante volte ogni carattere appare nella stringa.

## Installazione

Per iniziare, assicurati di avere Node.js installato sul tuo sistema.

1.  **Clona il repository**:
    ```bash
    git clone https://github.com/federissoo/ssgs-labo-02.git
    ```
2.  **Naviga nella directory del progetto**:
    ```bash
    cd labo-string
    ```
3.  **Installa le dipendenze**
    ```bash
    npm install
    ```

## Utilizzo

Per utilizzare le funzionalità della CLI, esegui il file `index.js` con Node.js, fornendo il numero della funzione desiderata e la stringa di input, più eventuali parametri aggiuntivi.

**Sintassi Generale:**
```bash
node index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```

## Test e Code Coverage

Il progetto è configurato per raggiungere il 100% di code coverage. Per eseguire i test e generare il report di coverage:

```bash
npm test
```

Il report di coverage sarà disponibile nella cartella `coverage/` e mostrerà informazioni dettagliate sulle parti di codice testate.