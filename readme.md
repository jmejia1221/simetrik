# Simetrik Test

Created by [@johnmejiah](https://twitter.com/johnmejiah) para [Semtrik](https://simetrik.com)

### 🚀 Activity

**Buscador General.**
    Crear input único que al ingresar texto realice una búsqueda en todos estos arrays y mostrar los resultados de manera discriminada por cada módulo.
    Es importante poder tener filtro según tipos de datos como textos, números, fechas.


### 🤖 Guía Rápida

1.  **Available Scripts.**

    Dependencies install

    ```sh
    yarn
    ```
    or
    
    ```
    npm install
    ```
    
    Start running

    ```sh
    yarn dev
    ```
    
    or
    
    ```
    npm run dev
    ```

    El sitio estará disponible en http://localhost:3000.

### Cuestionario
1. ¿Por qué no debería usar la librería JQuery, si estoy usando ReactJS? 
2. ¿Porque usarias Hooks de las nuevas versiones de ReactJS, en lugar de class component?
3. ¿Que es un archivo JSX? 
4. ¿Que diferencia hay entre una function y una arrow function de Javascript? 
5. ¿Qué es Redux y cómo nos ayuda en los proyectos? 
6. ¿Por qué usuarios pruebas unitarias en tu código? 
7. ¿Que nos permite hacer la siguiente declaración? 
```const anyFunction = (param_1) => (param_2) => param_1 + param_2```

### Respuestas
1. Es una mala práctica ya que React usa el concepto de Virtual DOM en lugar de real DOM.
React no es conciente de los cambios hechos fuera del Virtual DOM. Cuando se usa jQuery o otra 
libreria que manipule el DOM, React se confunde.

2. Basicamente una de las principales razones por las que usaría Hooks es que siempre se usan funciones
en vez de tener que cambiar constantement entre functions, classes, higher-order-components, y render props.

3. Son siglas de Javascript XML. JSX nos permite escribir HTML en React.

4. Hay varias diferencias tales como: 
    - Sintaxis: Ambas tienen una sintaxis diferente
    ```
        // Arrow function
        let add = (x, y) => x + y;
        let squareNum = x => x * x;

        // Normal function

        let add = function(x, y) {
            return x + y;
        };

    ```
    - Arguments binding: Arrow functions no tienen arguments biding
    ```
        // Object with Regular function.
        let getData = {
        // Regular function
            showArg:function(){
            console.log(arguments);
            }  
        }
        getData.showArg(1,2,3); // output {0:1,1:2,2:3}

        ------------------------------

        // Object with Arrow function.
        let getData = {
        // Arrow function
            showArg:()=>console.log(arguments)
        }
        getData.showArg(1,2,3); // Uncaught ReferenceError: arguments is not defined
    ```
    - Alcance del this: Arrow functions a diferencia de Normal functions no tiene su propio "this" keyword y está vinculado al parent function más cercano (excepto si es otro arrow function)

5. Redux es un contenedor de estado que nos ayuda a escribir consistentes apps, corre en diferentes ambientes (cliente, servidor y nativo), más que un manejador de estados redux es una arquitectura
(A one-way data flow architecture for the UI) que nos permite escalabilidad en nuestra app.

6. El principal proposito por el que usaria unit test es para checkear que todos los componentes individualmente continuen trabajando despues de realizar cambios en la applicación.

7. Esta declaración se le llama Closure, basicamente nos permite acceder a un lexical scope, incluso
cuando la función es ejecutada por fuera del lexical scope. En JS, clousures son creados cada vez
que una función es creada.
