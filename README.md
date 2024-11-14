
# Firebase To-Do App

Una aplicación de lista de tareas creada con HTML, CSS, JavaScript, y Firebase Firestore para almacenar las tareas. Este README te guiará a través de las características de la aplicación, las tecnologías utilizadas, cómo configurarla y cómo contribuir al proyecto.

## Características

- **Agregar una nueva tarea**: Permite al usuario agregar tareas a la lista, incluyendo una fecha de vencimiento opcional.
- **Editar tareas**: Modifica el contenido de una tarea existente.
- **Eliminar tareas**: Borra una tarea de la lista de manera permanente.
- **Marcar tareas como completadas**: Cambia el estado de una tarea para indicar que ha sido completada.
- **Filtrar tareas**: Filtra las tareas por "Todas", "Completadas" y "Pendientes" para facilitar la organización.
- **Persistencia de datos en la nube**: Utiliza Firebase Firestore para almacenar y sincronizar las tareas de manera segura y en tiempo real.
- **Actualización en tiempo real**: Las tareas se actualizan automáticamente en la interfaz cuando se agregan, modifican o eliminan.

## Tecnologías Utilizadas

- **Firebase Firestore**: Base de datos en la nube para almacenar y sincronizar las tareas en tiempo real.
- **JavaScript**: Lógica de la aplicación, que maneja el CRUD de las tareas (Crear, Leer, Actualizar, Borrar).
- **HTML & CSS**: Diseño y estructura de la interfaz de usuario para una experiencia de usuario agradable e intuitiva.

## Estructura del Proyecto

```
firebase-todo-app/
|
├── src/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
│
├── index.html
└── README.md
```

- `index.html`: Archivo principal que carga la aplicación en el navegador.
- `styles.css`: Archivo de estilos para darle una apariencia moderna y limpia a la aplicación.
- `app.js`: Archivo que contiene la lógica para agregar, editar, eliminar y mostrar las tareas usando Firestore.
- `README.md`: Instrucciones y guía para el proyecto.

## Configuración

### Requisitos Previos

- Cuenta de Firebase.
- Crear un proyecto en [Firebase Console](https://console.firebase.google.com/).
- Habilitar Firestore Database en Firebase Console.

### Instrucciones para Ejecutar el Proyecto

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/firebase-todo-app.git
   ```

2. **Navega al directorio del proyecto**:

   ```bash
   cd firebase-todo-app
   ```

3. **Configura Firebase**:
   - Abre el archivo `src/js/app.js`.
   - Reemplaza la configuración de Firebase con los datos de tu proyecto:

   ```javascript
   const firebaseConfig = {
       apiKey: "TU_API_KEY",
       authDomain: "TU_AUTH_DOMAIN",
       projectId: "TU_PROJECT_ID",
       storageBucket: "TU_STORAGE_BUCKET",
       messagingSenderId: "TU_MESSAGING_SENDER_ID",
       appId: "TU_APP_ID"
   };
   firebase.initializeApp(firebaseConfig);
   const db = firebase.firestore();
   ```

4. **Abre `index.html` en un navegador** para ejecutar la aplicación localmente.

## Uso

- **Agregar Tareas**: Escribe el nombre de la tarea en el campo de entrada y haz clic en el botón "Agregar Tarea".
- **Editar Tareas**: Haz clic en el ícono ✏️ al lado de la tarea que deseas editar y proporciona el nuevo texto.
- **Eliminar Tareas**: Haz clic en el ícono 🗑️ al lado de la tarea para eliminarla.
- **Marcar como Completada**: Haz clic en el ícono ✔️ al lado de la tarea para marcarla como completada.
- **Filtrar Tareas**: Usa el menú desplegable en la parte superior para filtrar las tareas por "Todas", "Completadas" o "Pendientes".

## Personalización

- **Estilos**: Puedes personalizar el estilo de la aplicación modificando `styles.css`. Cambia los colores, fuentes y el diseño para que se adapte a tus preferencias.
- **Ampliación de Funcionalidades**: Puedes agregar nuevas funcionalidades como autenticación de usuario para listas de tareas personalizadas, notificaciones para recordatorios de tareas, y mucho más.

## Mejoras Futuras

- **Autenticación de Usuarios**: Permitir a los usuarios registrarse e iniciar sesión para que puedan tener listas de tareas personalizadas.
- **Notificaciones**: Agregar recordatorios automáticos para las tareas con fechas de vencimiento.
- **UI Mejorada**: Mejorar la interfaz de usuario para hacerlo más atractivo y adaptable a dispositivos móviles.

## Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de abrir un problema o enviar un pull request con mejoras, correcciones o nuevas funcionalidades.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Créditos

Gracias a la comunidad de desarrolladores y a los recursos educativos que hicieron posible la creación de este proyecto. Si encuentras útil esta aplicación, no dudes en darle una estrella al repositorio en GitHub.

---

**Nota**: Esta aplicación está destinada solo a fines educativos y de demostración. Firebase tiene costos asociados si se exceden ciertos límites, por lo que se recomienda revisar los precios antes de lanzar una aplicación a producción.

