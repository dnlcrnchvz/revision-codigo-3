// Tenemos un li de productos
const productos = [
  /* Modifique la ruta de las img con la ubicación de la carpeta,
  cambie el orden de los zapatos al igual que zapato por zapatilla */
  {nombre: "Zapatilla azul", tipo: "zapatilla", color: "azul", img: "./img/taco-azul.jpg"},
  {nombre: "Zapatilla negra", tipo: "zapatilla", color: "negro", img: "./img/taco-negro.jpg"},
  {nombre: "Zapatilla roja", tipo: "zapatilla", color: "rojo", img: "./img/zapato-rojo.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./img/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./img/bota-azul.jpg"}
]

// cambie a getElementById y el nombre de las constantes
const lista_productos = document.getElementById("lista-productos");
const buscador_input = document.getElementById('buscador');

// Función para mostrar productos
function displayProductos(productosAMostrar) {
  // Limpia el contenido del contenedor de productos para evitar duplicaciones.
lista_productos.innerHTML = "";

productosAMostrar.forEach(producto => {
  const productoDiv = document.createElement("div");
  productoDiv.classList.add("producto");

  const titulo = document.createElement("p");
  titulo.classList.add("titulo");
  titulo.textContent = producto.nombre;

  const imagen = document.createElement("img");
  imagen.setAttribute('src', producto.img);

   // Añadí el título e imagen al contenedor del producto.
  productoDiv.appendChild(titulo);
  productoDiv.appendChild(imagen);

  // Añadi el contenedor del producto a la lista de productos
  lista_productos.appendChild(productoDiv);
});
}
// Mostrar todos los productos al cargar
displayProductos(productos);

// Botón de filtro
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  const texto = buscador_input.value.toLowerCase(); // Convertir a minúsculas para la comparación, y cambiar al id del input
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
};

// Función de filtrado
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};