import './styles.css';

// Se utiliza este index para realizar todas las importaciones
// Se utiliza la dirección porque por defecto busca el index.js en la carpeta
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ) );


// const tarea = new Todo('aprender JS');
// todoList.nuevoTodo( tarea );

// console.log( todoList );

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');



// setTimeout(() => {
    
//     localStorage.removeItem('mi-key'); //remueve el item ('ABC123)

// }, 1500);
