# Gestor de Tareas

Este proyecto es un simple gestro de tareas desarrollado en javaScript, diseñado para permitir a los usuarios agregar, completar y eliminar tareas.

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

- `index.html`: Contiene la estructura básica de la página web con el formulario para agregar tareas y la lista de tareas.
- `style.css`: Archivo de estilos para daar fomato a la página.
- `src/`
    - `task.ts`: Clase TypeScript para representar una tarea.
    - `main.ts`: Cóodigo principal TypeScript que maneja la lógica de la aplicación.

## Uso
Una vez que el proyecto este funcionando en el navegador, el usuario puede:

- Agregar nuevas tareas utilizando el formulario proporcionado.
- Marcar las tareas como completadas haciendo click sobre la tarea correspondiente.
- Eliminar tareas haciendo clic en el botón de eliminar junto a cada tarea.

## Configuración de TypeScript
El archivo `tsconfig.json` es utilizado para configurar el compilador de TS. Aquí están las principales opciones de configuración.

- `"target": "ES5"`: Indica que el código typescript se compilarpa a JavaScript compatible con ES6. Asegura una mahor compatibilidad con navegadores y entorno antiguos.
- `"module": "ES6"`: Indica que se utilizarpan módulos de ES6 en el código TypeScript. Esto permite utilizar las características de importación/exportación de ES5 en tu código.
- `"outDir": "./dist"`: Especifíca el directorio de salida para los archivos compilados.
- `"strict": true`: Habilita todas las opciones estrictas del compilador de TypeScript para mejorar la seguridad y la calidad del código.
- `"include": ["src/**/*.ts"]`: Especifica qué archivos TypeScript deben ser incluidos en la compilación.