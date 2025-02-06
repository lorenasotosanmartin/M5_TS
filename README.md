# Introducción a TypeScript en ReactJS 

### Preguntas Teóricas sobre TypeScript
**- ¿Qué es TypeScript y para qué se utiliza?**
TypeScript es un lenguaje de programación creado el año 2012 por Microsoft, superconjunto de JavaScript, lo cual, lo convierte en una versión más extendida y robusta de este último. Fue diseñado para superar algunas de las limitaciones de JavaScript agregando características que facilitan la escritura de código más sólido y mantenible, como, por ejemplo, el uso de clases, interfaces y tipos de datos para las variables. 
Si bien TypeScript podemos usarlo en cualquier ámbito donde se pueda usar JavaScript, se utiliza principalmente en el desarrollo de aplicaciones web más complejas y en proyectos que necesitan un mantenimiento a largo plazo ya que dado sus particularidades facilitan la construcción y mantención de este tipo de aplicaciones. También, es común integrarlo en proyectos ya existentes de JavaScript que han ido escalando, ya que, al ser compatibles, su integración se facilita.

**- ¿Cuáles son las principales diferencias entre TypeScript y JavaScript?**
La principal diferencia entre estos dos lenguajes de programación es su enfoque hacia los tipos. A diferencia de JavaScript, que no impone tipos, TypeScript en modo estricto garantiza que las variables mantengan sus tipos designados y evita que cambien inesperadamente. Entre otras diferencias entre estos lenguajes, se encuentra: 
  - A diferencia de JavaScript, TypeScript tiene características adicionales de orientación a objetos, como interfaces y modificadores de acceso, que pueden hacer que sea más fácil trabajar en grandes bases de código.
  - TypeScript dispone de una escritura estática, mientras que JavaScript es un lenguaje dinámico.
  - TypeScript no se ejecuta directamente en los navegadores. Necesita ser transpilado a JavaScript, lo que puede requerir herramientas adicionales y aumentar el tiempo de desarrollo.

**- ¿Por qué es útil TypeScript en el desarrollo de aplicaciones ReactJS?**
Algunas de las ventajas de utilizar typeScript en react, son las siguientes: 
  - Se pueden definir fácilmente los PropTypes, añadiendo legibilidad cuando se desea verificar la definición de un componente.
  - TypeScript proporciona un mejor autocompletado para JSX (extensión de la sintaxis de JavaScript), utilizado ampliamente en React.
  - Se disminuye el riesgo de encontrar errores Undefined en tiempo de ejecución, ya que el compilador de TypeScript puede detectarlos en tiempo de transpilación.
  - La refactorización es mucho más fácil ya que conocemos los tipos exactos y dónde cambiarlos. 
  - Se pueden seguir fácilmente los principios de POO y usar interfaces que permiten estructurar el código con el menos acoplamiento posible

**- ¿Qué es el sistema de tipos en TypeScript y cómo ayuda a evitar errores en tiempo de desarrollo?**
Como ya fue mencionado, TypeScript cuenta con sistema de tipos, esto quiere decir, que permite definir tipos para variables, dependiendo por ejemplo si es un number, una cadena de texto o un boolean.
Existen 3 categorías de los tipos de datos de TypeScript:
  - Cualquiera: Esto significa que una variable puede ser cualquier tipo de dato (tipo any).
  - Integrado:  Las variables de número, booleano, cadena, nulo, vacío e indefinido.
-  Definido por el usuario: Incluyen enumeración, matriz, interfaz, tupla y clase.
Este sistema de tipos, al llevarnos a definir los tipos de las variables y funciones desde el principio, permite evitar problemas de lógica y que los errores se detecten en tiempo de compilación en lugar de en tiempo de ejecución. Lo cual mejora los tiempos y facilita el desarrollo de una aplicación en particular cuando es de mayor complejidad.

### Definición de Tipos e Inferencia
En este proyecto se utiliza correctamente la definición de tipos, utilizando una interfaz llamada doctor que define sus parametros con una correcta definición de los tipos aosciados a los paramentros, permitiendo que cuando se reciben los datos de los doctores disponibles en un archivo JSON, estos se guarden bajo esta definición y se utilizen a lo largo del sitio.

### Definición de Interfaces y Clases en TypeScript
En el archivo ubicado en interfaces/Doctor se crea la interfaz de doctor con sus parametros y tipos descritos. en el archivo classes/DoctorClass se crea la clase que representa a un doctor con dos metodos uno que permite obtener la información de un doctor y el segundo nos permite actualizar la especialidad de un doctor en especifico, en el primer metodo mencionado no se especifica el tipo de salida de la función con el objetivo de mostrar el uso de inferencias en TypeScript.

### TypeScript y ReactJS: Implementación Básica en un Componente
En la carpeta Components/doctorCard, se encuentra el componente que nos permite visualizar la información de un doctor en pantalla, el cual recibe los datos como props. este componente al igual que las vista se encuentra tipado en TypeScript asignando correctamente tipos a los datos utilizados.

### Ventajas de TypeScript en el Desarrollo con ReactJS
EL uso de TypeScript favorece el desarrollo de aplicaciones a mayor escala por sobre JavaScript, ya que permite obtener multiples beneficios como una mayor legibilidad del codigo, nos permite crear estructuras en base a interfaces y clases permitiendo trabajar con una estructura mas definida de los datos en una aplicación, y la detección temprana de errores, lo cual, favorece el desarrollo en particular en aplicaciones que manejan gran volumen de datos como lo es el caso del proyecto hospital presentado.

 ### Visualización del proyecto
Para visualizar este proyecto se necesita que previamente cuentes con la instalación de:
- **Git**: [sitio de descarga] (https://git-scm.com/downloads)
- **Node.js**: [sitio de descarga] (https://nodejs.org/en/download/package-manager)
- **Visual Studio Code**: [sitio de descarga] (https://code.visualstudio.com/download)
  
Una vez que ya cuentes con lo descrito anteriormente, debes clonar este repositorio en una carpeta local, mediante el siguiente comando:
```bash
git clone https://github.com/lorenasotosanmartin/M5_TS.git
```
cuando ya este clonado, escribir el siguiente comando en la consola: 
```bash
npm  i
```
y ejecutar el comando, para inicializar el proyecto: 
```bash
npm run dev
```
Finalmente, para visualizar el proyecto en tu navegador debes abrir la url http://localhost:5173/ 

