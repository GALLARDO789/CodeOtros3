document.addEventListener("DOMContentLoaded", () => { //Usamos el evento DOMContentLoaded para asegurarnos de que el código JavaScript se ejecute solo después de que el documento HTML esté completamente cargado. 
  const productos = [
    { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
    { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
    { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
    { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
    { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
  ];

  const li = document.getElementById("lista-de-productos"); //Se cambia a ID para que cargue la lista 
  const $i = document.querySelector('input[type="text"]');

  function displayProductos(productos) {
    while (li.firstChild) {
      li.removeChild(li.firstChild);
    }
    productos.forEach(producto => {
      const d = document.createElement("div");
      d.classList.add("producto");

      const ti = document.createElement("p");
      ti.classList.add("titulo");
      ti.textContent = producto.nombre;

      const imagen = document.createElement("img");
      imagen.setAttribute('src', producto.img);

      d.appendChild(ti);
      d.appendChild(imagen);
      li.appendChild(d);
    });
  } // Se definio bien la funcion 

  displayProductos(productos); // para que se muestren los productos

  const botonDeFiltro = document.querySelector("button");

  botonDeFiltro.onclick = function() {
    const texto = $i.value.trim().toLowerCase();
    const productosFiltrados = filtrado(productos, texto);
    displayProductos(productosFiltrados);
  }; // Se cambio el evento a onclick para que funcione el botonp, ademas de que asi no marca error jaja xd.

  const filtrado = (productos = [], texto) => {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  };
});
