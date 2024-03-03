
<center>

# SPRINT 4

---
## React  Node MongoDB
<div style='display: flex; gap: 10px;'>
  <img src="./Documentacion/react.gif" alt="react" width="100">
  <img src="./Documentacion/node.png" alt="node" width="100">
  <img src="./Documentacion/mongodb.png" alt="mongodb" width="100">
</div>

<br/>

</center>


<center>

# :mag: Analisis del problema.
---
</center>

>En esta tarea, nos enfocaremos en el desarrollo del componente 'ShoppingCart', el cual permitirá al usuario, previamente logueado, seleccionar artículos y añadirlos al carrito. Una vez que los artículos estén agregados y sean visibles en la cesta, será posible modificar tanto las cantidades como eliminar los artículos del carrito.
El componente 'ShoppingCart', además de mostrar los artículos, también exhibirá el valor total de la compra, los datos del cliente para el envío y la opción de seleccionar un método de pago. Una vez que se haya completado el pedido, el carrito quedará vacío y se generará una orden con los detalles de la compra. Esta orden será visible desde el perfil del usuario.

<br/>
<center>

# ✏️Diseño de la solucion.
---
</center>

>Para afrontar este SPRINT, he implementado el backend con Node.js y Express para facilitar la carga de artículos desde la base de datos. Asimismo, he trabajado en la manipulación de la base de datos (MongoDB) para asegurar que contenga información relevante para ser mostrada en el frontend. En cuanto al frontend, he desarrollado una interfaz dinámica con React, diseñada para ofrecer una experiencia intuitiva en la aplicación web. El objetivo principal ha sido presentar la información de manera clara y ordenada, garantizando así una experiencia de usuario óptima.

<br/>

<center>

# 📝 Implementación de la solución.
---
</center>

>Verificaremos el funcionamiento del carrito (ShoppingCart) de la siguiente manera: estando en la ruta '/home' de nuestra web, al hacer clic en el icono del carrito, se nos indicará que debemos iniciar sesión previamente. Una vez iniciada la sesión, podremos añadir artículos al carrito. Al navegar hacia el carrito, se mostrará un mensaje indicando que no hay artículos en él si el usuario no tiene elementos en la propiedad 'cart' de la base de datos, de donde extraeremos la información para mostrarla en el carrito.
>
>Una vez que hemos cargado al menos un artículo en el carrito y navegamos hacia él, debería presentarnos los artículos previamente agregados, ofreciendo opciones para modificar la cantidad de los mismos o eliminarlos. Además, mostrará el precio total del pedido, el método de pago seleccionado y la opción para tramitar el pedido.
>
>Si intentamos tramitar el pedido sin seleccionar un método de pago, se mostrará una advertencia recordándonos que debemos elegir una opción de pago. Una vez seleccionado, al hacer clic en "Tramitar pedido", se creará una orden para el envío al cliente, y el usuario podrá visualizar el pedido realizado en su perfil.
>
>Todo este proceso será documentado en un plan de pruebas, respaldado por un video para cada prueba, permitiendo así la visualización del correcto funcionamiento del carrito.

<br/>

<center>

# ✅Pruebas
---
</center>

#### Test Login:

<img src='./Documentacion/testLogin.png' width="100%">
<img src='./Documentacion/testLogin.gif' width="100%">

#### Test Añadir articulos en el carrito: 

<img src='./Documentacion/testAddArticles.png' width="100%">
<img src='./Documentacion/testAddArticles.gif' width="100%">

#### Test Modificar carrito:
<img src='./Documentacion/testUpdateCart.png' width="100%">
<img src='./Documentacion/testUpdateCart.gif' width="100%">

#### Test Tramitar pedido:

<img src='./Documentacion/testCheckout.png' width="100%">
<img src='./Documentacion/testCheckout.gif' width="100%">

#### Test Orden creada:

<img src='./Documentacion/testCreateOrder.png' width="100%">
<img src='./Documentacion/testCreateOrder.gif' width="100%">

## [Descarga el plan de pruebas](./Documentacion/PlandepruebasCarrito(Fermin).pdf)