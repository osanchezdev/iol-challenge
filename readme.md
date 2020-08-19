# IOL challenge :punch:

### Tabla de contenido :rocket:

- [Demo](#demo-bulb)
- [Instalación](#instalación-wrench)
- [Estructura del proyecto](#estructura-del-proyecto-file_folder)
- [Librerías](#librerías-package)

### Demo :bulb:

[![Deployed in Netlify](https://www.netlify.com/img/deploy/button.svg)](https://5f399f6bad43c4ad77a78b7e--trusting-pare-3bceae.netlify.app/)

### Instalación :wrench:

Recomiendo usar [yarn](https://yarnpkg.com/) a la hora de iniciar el proyecto por ser más rápido y seguro que sobre [npm](https://www.npmjs.com/), de igual forma siéntase libre de usar el que guste, para efectos de esta guía estaré usando **yarn**.

#### Scripts disponibles:

Antes de ejecutar cualquier script del proyecto es necesario **instalar las dependencias** del mismo:

```bash
yarn install
```

##### Dev

Para desarrollo, se hace uso de `webpack-dev-server`, con watchers que actualizan el navegador ante cualquier cambio.

```bash
yarn dev
```

##### Start

Con este script usamos `webpack-dev-server` pero con un bundle optimizado para producción, también cuenta con watchers activos.

```bash
yarn start
```

##### Build

Este script usa webpack para crear un empaquetado del proyecto en la carpeta **build** listo para ser puesto en producción

```bash
yarn build
```

##### Lint

Se usa para detectar errores de formato con [ESlint](https://eslint.org/).

```bash
yarn lint
```

##### Lint:fix

Se usa para darle el formato correcto al proyecto.

```bash
yarn lint:fix
```

##### Test

Ejecuta todas las pruebas del proyecto manejadas con [Jest](https://jestjs.io/).

```bash
yarn test
```

### Estructura del proyecto :file_folder:

A continuación una breve introducción al proyecto:

1. `/config`: Aquí se encuentran los archivos de configuración de [Webpack](https://webpack.js.org/) y de [Jest](https://jestjs.io/).
2. `/public`: Contiene el template `index.html` que usará [Webpack](https://webpack.js.org/) para incrustrar los links al JS y CSS luego de optimizar.
3. `/src`: Tiene la mayor parte del proyecto:<br>
   3.1. `|-/api`: Contiene un archivo donde están los endpoints a usar por la app.<br>
   3.2. `|-/components`: Aquí están los componentes de [React](https://es.reactjs.org/) a usar en toda la app, están separados en 2 carpetas:<br>
   3.2.1. `|--/global`: En esta se encuentran aquellos componentes que podrían ser globales o muy utilizados por toda la app.<br>
   3.2.2. `|--/Home`: Contiene componentes específicos de la página/pantall del _HOME_.<br>
   3.3. `|-/constants`: Tiene 2 archivos, `index` que contiene constantes globales y `validationSchemas`que contiene los esquemas de validación que compatirán los diferentes formularios en la app.<br>
   3.4. `|-/context`: Aquí están aquellos componentes que manejan toda la lógica del estado y los datos a consumir desde otros componentes, haciendo uso de Context de [React](https://es.reactjs.org/), si la app crece más se recomienda cambiar a [redux](https://es.redux.js.org/).<br>
   3.5. `|-/router`: Contiene el archivo con la configuración de las diferentes rutas.<br>
   3.6. `|-/services`: Tiene todas aquellas funciones que se usarán para consumir datos externos.<br>
   3.7. `|-/styles`: Contiene todos los archivos de estilos.<br>
   3.8. `|-/app.jsx`: Archivo que contiene el componente principal (es el punto de entrada de [Webpack](https://webpack.js.org/)).<br>
4. `/tests`: Está dividido en más carpetas que contiene todas las pruebas escritas del proyecto.
5. `/.babelrc`: Archivo de configuración de [Babel](https://babeljs.io/).
6. `/eslintrc.json`: Archivo de configuración de ESlint para mantener una estructura en cuanto a la sintáxis del código.
7. `/.gitignore`: Usado por git para ignorar ciertas rutas y archivos.
8. `/.prettierrc`: Archivo de configuración de [Prettier](https://prettier.io/), se usa para formatear el código.
9. `/package.json`: Registro de las dependencias del proyecto.
10. `/readme.md`: Este archivo que estás leyendo.
11. `/setupTests.js`: Configuración de [Jest](https://jestjs.io/) + [Enzyme](https://enzymejs.github.io/enzyme/) para testing.
12. `/yarn.lock`: Archivo de [yarn](https://yarnpkg.com/) para congelar las versiones de las dependencias del proyecto.

### Librerías :package:

Librerías usadas en el proyecto:

- [React](https://es.reactjs.org/), librería de Javascript para la creación de interfaces de usuario. Se usó para crear los distintos componentes que requería la app.
- [React-router](https://reactrouter.com/), una colección de componentes para navegar entre rutas, se usó para manejar los diferentes cambios de parametros y rutas de la app.
- [Bootstrap](https://getbootstrap.com/), un framework de componentes UI.
- [React-bootstrap](https://react-bootstrap.github.io/), una colección de componentes de bootstrap re-escritos con React, la preferí por sobre "Vanilla Bootstrap" ya que este no necesita jQuery.
- [React-hook-form](https://react-hook-form.com/), librería de React para la validación de formularios, en su página oficial muestran su rendimiento frente a otras populares como Formik o Redux-form.
- [Axios](https://github.com/axios/axios), cliente http para Javascript, empleado para hacer llamadas a servicios externos, ahorra mucho trabajo.
- [Framer motion](https://www.framer.com/motion/), librería para React de animaciones, es genial.
- [React-lazy-load-image-component](https://github.com/Aljullu/react-lazy-load-image-component), un [HOC](https://es.reactjs.org/docs/higher-order-components.html) de React que facilita la "carga peresoza" de imágenes mejorando el rendimiento.

Como dependecias de desarrollo tenemos:

- [Webpack](https://webpack.js.org/), un empaquetador de módulos estáticos para aplicaciones de Javascript modernas, sirve para automatizar tareas, procesar, minificar y optimizar archivos quedando listos para producción.
- [Babel](https://babeljs.io/docs/en/), es un transpilador de Javascript moderno (ES10) a versiones con mayor compatibilidad (ES5).
- [Jest](https://jestjs.io/), framework de testing de Javascript enfocado en la simplicidad.
- [Enzyme](https://enzymejs.github.io/enzyme/), es una utilidad de testing para React (recuerda un poco a jQuery).
- [ESlint](https://eslint.org/), herramienta de análisis de código estático, ayuda a escribir código consistente a lo largo del proyecto.
- [Prettier](https://prettier.io/), herramienta para formatear el código de forma automática.
