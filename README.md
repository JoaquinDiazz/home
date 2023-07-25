#Ecommerce de Muebles - Proyecto de React

Este es un proyecto de Ecommerce de Muebles creado con Create React App (CRA), utilizando Firebase para la gestión de la base de datos. También se utiliza Context API para la administración del estado global de la aplicación y React Router para la navegación entre las distintas páginas.

##Funcionalidades

-Navegación entre páginas: La aplicación cuenta con una navegación fluida y dinámica gracias a React Router, permitiendo al usuario explorar diferentes secciones del ecommerce.

-Visualización de Productos: Los usuarios pueden explorar una variedad de muebles disponibles en el ecommerce, con detalles de cada producto y la posibilidad de agregarlos al carrito de compras.

-Carrito de Compras: Los usuarios pueden agregar y eliminar productos del carrito de compras, y visualizar el total de su compra antes de proceder al pago.

-Procesamiento de Pago: Se le pide al consumidor que ingrese sus datos para finalizar la compra obteniendo su orden de compra.

##Instalación

###Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio a tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando npm install para instalar las dependencias.
4. Ejecuta el comando npm run dev para iniciar la aplicación.
5. Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en acción.


##Configuración de Firebase

###Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.
3. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
4. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
5. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

##Licencia

Este proyecto está bajo la Licencia MIT. Puedes ver más detalles en el archivo LICENSE.