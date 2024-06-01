
<center>

# SomniJoyas 

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

## :mag: Detalles del proyecto
---
</center>

> **BACKEND >** El del backend esta desarrollada con **NodeJS**, esta alojada en el directorio **/server** y desplegada en **Render** en el enlace  https://somniapi.onrender.com y la documentacion **SWAGGER** en https://somniapi.onrender.com/api-docs/ que de forma comoda podemos hacer un CRUD de todas las colecciones de la BBDD.

> **FRONTEND >** El frontend esta desarrollada con **REACT + VITE**, esta alojada en el directorio **/somni** y desplegada con **Vercel** en el enlace https://somnijoyas.vercel.app/rings (aunque tarda muchisimo la respuesta hasta que implemente la paginacion, en local funciona inmediato).
>
> **PD:** para el uso en local hacer cambios el fichero /somni/src/config.jsx y un usuario demo seria:
>Usuario: fermin@fermin.es
> Contraseña: 12345678
> Si no siempre te quedara la opcion de registrarte.


> **BBDD >** La parte de la BBDD esta desarrollada en **mongoDB**, los modelos de las colecciones los podemos ver en el directorio **/server/models**. Y en el directorio **/BBDD/Somni** guardo un ejemplo de la coleccion "Orders" y "users" y la coleccion completa de los articulos con sus datos e imagenes codificadas en base64. El despliegue de la BBDD esta realizado con **MongoDB Atlas**. Y entrando un poco mas en detalle con la coleccion "Orders" es la que "asocia" a los usuarios con los articulos, guardando el id del usuario y los ids de los articulos comprados en cada orden, aparte de algunos datos mas.

<br/>

<center>

## ✅ Tareas terminadas
---
</center>

> * Manejo de **unidades de articulos** de coleccion Orders para mejorar el "Ver pedidos" del panel de usuario
> * **SMTP** para que el usuario contacte con SomniJoyas o modo retroalimentacion cuando realice un pedido
> * **Paginacion** en todas las ventanas de articulos
> * **Usuario Root** con interface propia para: 
>    * Manejo de stock de articulos
>    * CRUD de articulos de forma visual y comoda
>    * Manejo de usuarios y ordenes asociadas
> * **Mejorar aspecto visual** de todo en general

<center>

## ✏️ Tareas pendientes
---
</center>

> * **@media** WEB apta para dispocitivos moviles (responsive)
> * **Test** unitarios de la API
> * **Test** unitarios del Frontend
> * **Mejorar aspecto visual** de todo en general

<center>

## ✅Pruebas
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