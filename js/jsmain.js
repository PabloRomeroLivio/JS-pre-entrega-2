const usuarios = [
  { nombre: "pablo", contraseña: "pass1234" }
];


const productos = {
  prod1: { nombre: "Producto 1", precio: 1.50 },
  prod2: { nombre: "Producto 2", precio: 1.50 },
  prod3: { nombre: "Producto 3", precio: 1.50 },
  prod4: { nombre: "Producto 4", precio: 2.00 },
  prod5: { nombre: "Producto 5", precio: 1.50 },
  prod6: { nombre: "Producto 6", precio: 2.00 }
};


function registrarUsuario() {
  let nombre = prompt("Ingrese un nombre de usuario:");
  let contraseña = prompt("Ingrese una contraseña (mínimo 5 caracteres):");


  if (usuarios.some(user => user.nombre === nombre)) {
    alert("Este nombre de usuario ya está en uso. Intente con otro.");
    return registrarUsuario(); 
  }

  if (nombre && contraseña && contraseña.length >= 5) {
    usuarios.push({ nombre, contraseña });
    alert("Usuario registrado correctamente.");
  } else {
    alert("Error: Asegúrese de ingresar un usuario y contraseña válidos.");
    registrarUsuario(); 
  }
}

function validarUsuario(nombre, contraseña) {
  return usuarios.some(user => user.nombre === nombre && user.contraseña === contraseña);
}

let opcion = prompt("¿Tiene cuenta? Escriba 'login' para iniciar sesión o 'registrarse' para crear una cuenta:");
if (opcion === "registrarse") {
  registrarUsuario();
}


let user = prompt("Ingrese su nombre de usuario:");
let pass = prompt("Ingrese su contraseña:");

while (!validarUsuario(user, pass)) {
  alert("Usuario o contraseña incorrectos. Intente de nuevo.");
  user = prompt("Ingrese su nombre de usuario:");
  pass = prompt("Ingrese su contraseña:");
}

alert(`Bienvenido, ${user}. Elija la cantidad de cada producto.`);


function solicitarCantidad(nombreProducto) {
  let cantidad = parseInt(prompt(`¿Cuántas unidades desea de ${nombreProducto}?`));
  if (isNaN(cantidad) || cantidad < 0) {
    alert("Cantidad no válida. Ingrese un valor positivo.");
    return solicitarCantidad(nombreProducto);
  }
  return cantidad;
}


let carrito = [];

for (let key in productos) {
  let cantidad = solicitarCantidad(productos[key].nombre);
  carrito.push({ nombre: productos[key].nombre, cantidad, precio: productos[key].precio });
}


function calcularTotal(carrito) {
  return carrito.reduce((total, item) => total + (item.cantidad * item.precio), 0);
}

let total = calcularTotal(carrito);

if (total > 0) {
  alert(`El total de su compra es: ${total} euros.`);
} else {
  alert("No ha ingresado cantidades válidas. Recargue la página para intentar de nuevo.");
}