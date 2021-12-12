# Dom Tree - Exercise 3
Implementare il codice necessario per recuperare il valore di ciascun campo di input e della corrispettiva label associata.
In console occorrerà stampare il seguente risultato:
```
First Name: Mario
Last Name: Rossi
Age: 25
```

 const inputEl = document.querySelectorAll('input');
  inputEl.forEach(input => {
    const labelEl = input.previousElementSibling;
    console.log(`${labelEl.textContent} ${input.value}`);
  })