## Introducción

El juego del _Memory_ consiste en un número par de cartas con imágenes por un lado y el reverso de color genérico. Cada imagen aparece únicamente en dos de las cartas.

![Memory Game Board](https://imgur.com/4Wyw3kh.png)

Cuando el juego comienza, todas las cartas están boca abajo. El jugador gira dos de las cartas, seleccionándolas mediante un click sobre ellas. Si las dos cartas tienen la misma imagen, se quedan boca arriba. En caso contrario recuperan su posición original después de un breve periodo de tiempo.

El objetivo del juego es conseguir dar la vuelta a todas las cartas en el menor número de intentos. Es decir, cuantos menos intentos mejor puntuación.

El cliente nos ha facilitado una versión no finalizada del juego, y nos pide que lo adaptamos a tecnologías modernas de desarrollo web que nos permita tener un código robusto y escalable

## Requisitos
- Los requerimientos se facilitan como historias de usuario dentro del trello: https://trello.com/invite/b/WFeFXnH9/ATTI2910f63594a6f6fbdddcea3f6a19753eB06ACF76/memory-f5.
- La UI debe constar de tres pantallas: hero-intro, settings y game:
  - **hero-INTRO**
    - Hero-image con animación y botón **start** tras 2" de animación
  - **settings**
    - RadioButton para seleccionar dificultad del juego (+ tarjetas)
    - RadioButton para seleccionar temática del juego (al menos 2)
    - Formulario para elegir nombre de usuario y avatar
  - **game**
    - Ver siguiente apartado

## Planificación del Juego

Para programar el juego, necesitarás recrear las partes físicas del mismo (el *layout*) e implementar las reglas del juego (la *lógica*). Este juego es una versión mono-jugador, lo cual simplifica la lógica en cierto modo.

💡 **La clave es la organización**. Mantén separadas la parte de código del *layout* y del interfaz de usuario por una parte y el código del juego por otro

### El *layout*

- Añade al html las partes que tendrá tu juego: El tablero, las cartas y la puntuación:

```htmlmixed=
<!DOCTYPE html>
<html>
  <head>
    <title>Superhero Memory Game</title>
    <link type="text/css" rel="stylesheet" href="memory.css" media="screen">
  </head>
  <body>
  </body>
</html>
```
Si te fijas no hemos añadido un botón **Start**. En realidad no es necesario. Se pueden renderizar las cartas y crear un *listener* para comenzar el juego cuando el usuario clica en un elemento.

### Añade los estilos

- En la sección `header`, recuerda añadir el link to your CSS file.

```htmlmixed
<link type="text/css" rel="stylesheet" href="memory.css" media="screen">
```

### El código

Echa un vistazo a los ficheros de inicio `src/memory.js` y `src/main.js` que recogen la lógica y las interacciones HTML/CSS respectivamente.

**La lógica del juego**

Usaremos los test de Jasmine para probar la lógica del juego, que es bastante simple. Necesitaremos sólo una **clase`MemoryGame`** com métodos para mezclar y comparar las cartas y para comprobar que el juego ha terminado

- **En primer lugar**: Crea el método **constructor** de la clase `MemoryGame`. Recibirá por parámetro un array de cartas. Asígnalas a la propiedad `this.cards`. Necesitaremos también un array de cartas seleccionadas (`this.pickedCards`) para almacenar las cartas seleccionadas por el jugador y poder compararlas. Y, por último, dos propiedades: `this.pairsClicked` y `this.pairsGuessed` para añadir las parejas elegidas y las acertadas.

- Crea el método para mezclar las cartas cada vez que se inicia un nuevo juego. **Idea**: Sería una buena idea implementar algún tipo de algoritmo similar al [Algoritmo de Fisher-Yates](https://es.wikipedia.org/wiki/Algoritmo_de_Fisher-Yates).

```javascript
_shuffleCard() {
};
```

- Cuando un usuario selecciona dos cartas, necesitaremos comprobar si son la misma. Crearemos el método  `checkIfPair`, que reciba dos parámetros que serán las dos cartas seleccionadas por el jugador. El método añadirá una de ellas a la propiedad `pairsClicked` y si las cartas son iguales entonces añade una al `pairsGuessed`.
Esta función devolverá `true` o `false` según el resultado de la comparación de ambas cartas.

```javascript
checkIfPair(firstCard, secondCard) {

};
```
- Memory no tiene *'Game Over'*, sólo necesitamos una función *'Win'* donde comprobar que la propiedad `pairsGuessed` ha alcanzado el número de parejas que existen.

```javascript
finished() {
};
```

### Interacciones HTML/CSS

Piensa en las interacciones entre el usuario y el juego: El usuario clicará los elementos de la página y recibirá un resultado según acertó  o no la pareja.
- Lo primero que necesitamos es utilizar la información para llenar las cartas del tablero. Este comportamiento queremos que se dispare tan pronto como se cargue la página. Así que lo añadiremos al evento 'onload' de la venta de forma dinámica.

```javascript
addEventListener('load',function(){
});
```
- La otra interacción importante es el *listener* del clic. Añádelo cuando se haya cargado el documento.

```javascript
let back = document.querySelector('back');
back.addEventListener('click', function(){
});

```

## Requerimientos técnicos
- Desarrolla el front con React Vite + Vitest (intentad utilizar TDD para el desarrollo)
- Dearrolla el back con nestjs
- Buenas prácticas de arquitectura y programación.

## Modalidades pedagógicas

- Los equipos serán de 1, 2 o 3 personas, trabajando de forma individual o pair-programming.
- El plazo para la realización del proyecto es de 6 días. Cada día habrá un hito que habrá que ir cubriendo.
- El trabajo debe organizarse a través de kanban.
- El repositorio inicial del proyecto está subido a github classroom y consta de dos ramas:
  - **`main`** con esta información y el starter-code de la versión javascript del juego
  - **`solution`** con el juego desarrollado en javascript
- Se trabajará usando git-flow para el control del desarrollo.

## Criterios de rendimiento
- El objetivo del proyecto es repasar JavaScript, TypeScript, React y Nest.js + bbdd. Se puede utilizar cualquier recurso técnico de estas tecnologías pero sin comprometer el alcance.
- Cada día habrá una puesta en común del resultado obtenido.
- Siempre es recomendable que cada equipo encuentre la solución, pero si tenéis problemas con el desarrollo del juego podéis trabajar a partir de la rama solution.

