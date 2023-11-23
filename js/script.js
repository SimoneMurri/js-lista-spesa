const listaSpesa = ['Uova', 'Pane', 'Formaggio', 'Legumi', 'Pasta'];

    const listaSpesaElement = document.getElementById('spesa-lista');
    let index = 0;

    while (index < listaSpesa.length) {

      const listItem = document.createElement('li');
      listItem.textContent = listaSpesa[index];
      listaSpesaElement.appendChild(listItem);
      
      index++;
    }